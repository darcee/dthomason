import type { Schema } from '../../data/resource';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
// @ts-ignore
import Parser from 'rss-parser';

const parser = new Parser();

type ArticleType = Schema['Article']['type'];

export const handler = async (event: any) => {
    console.log('StoryBoard scraper started');

    try {
        // Configure Amplify for server-side use
        const client = generateClient<Schema>();

        const sources = [
            {
                name: 'Medium',
                url: process.env.MEDIUM_RSS_URL,
                active: !!process.env.MEDIUM_RSS_URL,
            },
            // Add more sources here
        ];

        let allArticles: Omit<ArticleType, 'id' | 'createdAt' | 'updatedAt'>[] = [];

        for (const source of sources) {
            if (!source.active || !source.url) continue;

            try {
                console.log(`Scraping ${source.name}...`);
                const feed = await parser.parseURL(source.url);

                const articles = feed.items.map((item: any) => ({
                    title: item.title || 'Untitled',
                    url: item.link || '',
                    excerpt: item.contentSnippet?.substring(0, 200) + '...' || '',
                    content: item.content || item.description || '',
                    publishedDate: new Date(item.pubDate || item.isoDate || Date.now()).toISOString(),
                    source: source.name,
                    imageUrl: item.enclosure?.url || '',
                    author: item.creator || 'Darcee Thomason',
                    readTime: Math.max(1, Math.ceil((item.content?.length || 1000) / 1000)), // Rough estimate
                    tags: item.categories || [],
                    featured: false,
                }));

                allArticles = allArticles.concat(articles);
                console.log(`Found ${articles.length} articles from ${source.name}`);

            } catch (error) {
                console.error(`Error scraping ${source.name}:`, error);
            }
        }

        // Save articles to database
        let savedCount = 0;
        for (const article of allArticles) {
            try {
                // Check if article already exists by URL
                const existing = await client.models.Article.list({
                    filter: { url: { eq: article.url } }
                });

                if (existing.data.length === 0) {
                    await client.models.Article.create(article);
                    savedCount++;
                    console.log(`Saved: ${article.title}`);
                } else {
                    console.log(`Skipped duplicate: ${article.title}`);
                }
            } catch (error) {
                console.error(`Error saving article ${article.title}:`, error);
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'StoryBoard scraping completed',
                totalFound: allArticles.length,
                newArticles: savedCount,
                timestamp: new Date().toISOString(),
            }),
        };

    } catch (error) {
        console.error('StoryBoard scraper failed:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'StoryBoard scraping failed',
                error: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString(),
            }),
        };
    }
};