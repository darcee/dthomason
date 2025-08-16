import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import { message } from 'antd';

const client = generateClient<Schema>();

export const useStoryBoard = () => {
    const [articles, setArticles] = useState<Schema['Article']['type'][]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles();

        // Subscribe to real-time updates
        const subscription = client.models.Article.observeQuery().subscribe({
            next: (data) => {
                setArticles([...data.items]);
            },
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const response = await client.models.Article.list();

            // Sort articles by publishedDate descending (newest first)
            const sortedArticles = response.data.sort((a, b) =>
                new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
            );

            setArticles(sortedArticles);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch articles';
            setError(errorMessage);
            message.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const searchArticles = async (query: string) => {
        try {
            setLoading(true);
            const response = await client.models.Article.list({
                filter: {
                    or: [
                        { title: { contains: query } },
                        { excerpt: { contains: query } },
                        { tags: { contains: query } },
                    ]
                }
            });

            // Sort search results by publishedDate descending
            const sortedArticles = response.data.sort((a, b) =>
                new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
            );

            setArticles(sortedArticles);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Search failed';
            setError(errorMessage);
            message.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return {
        articles,
        loading,
        error,
        refetch: fetchArticles,
        searchArticles,
    };
};