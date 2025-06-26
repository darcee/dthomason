import React from 'react';
import {Button, Space, Typography} from 'antd';
import {
    LinkedinOutlined,
    GithubOutlined,
    MailOutlined,
    DownloadOutlined,
    CodeOutlined
} from '@ant-design/icons';
import './Hero.css';

const {Title, Paragraph} = Typography;

interface HeroProps {
    name?: string,
    role?: string,
    company?: string,
    subtitle: React.ReactNode,
    onResumeDownload?: () => void,
    onContactClick?: () => void,
    linkedinUrl?: string,
    githubUrl?: string,
    email?: string,
}

const Hero: React.FC<HeroProps> = ({
                                       name,
                                       role,
                                       subtitle,
                                       onResumeDownload,
                                       onContactClick,
                                       linkedinUrl,
                                       githubUrl,
                                       email,
                                   }) => {
    const handleResumeDownload = () => {
        if (onResumeDownload) {
            onResumeDownload();
        } else {
            console.log('Download resume');
        }
    };

    const handleContactClick = () => {
        if (onContactClick) {
            onContactClick();
        } else {
            window.location.href = `mailto:${email}`;
        }
    };

    const handleLinkedInClick = () => {
        window.open(linkedinUrl, '_blank');
    };

    const handleGitHubClick = () => {
        window.open(githubUrl, '_blank');
    };

    return (
        <div className="portfolio-hero-container">
            <div className="portfolio-hero-content">
                <div className="hero-main">
                    <div className="professional-badge">
                        <CodeOutlined className="badge-icon"/>
                        <span>How can I make your life better?</span>
                    </div>

                    {/* Name and Title */}
                    <Title level={1} className="hero-name">
                        {name}
                    </Title>

                    <div className="hero-role">
                        <Title level={2} className="role-title">
                            {role}
                        </Title>
                    </div>
                    <Paragraph className="hero-summary">
                        {subtitle}
                    </Paragraph>
                    <div className="hero-actions">
                        <Space size="large">
                            <Button
                                type="primary"
                                size="large"
                                className="primary-cta"
                                icon={<DownloadOutlined/>}
                                onClick={handleResumeDownload}
                            >
                                Download Resume
                            </Button>
                            <Button
                                size="large"
                                className="secondary-cta"
                                icon={<MailOutlined/>}
                                onClick={handleContactClick}
                            >
                                Get in Touch
                            </Button>
                        </Space>
                    </div>

                    {/* Professional Links */}
                    <div className="professional-links">
                        <Button
                            type="text"
                            icon={<LinkedinOutlined/>}
                            onClick={handleLinkedInClick}
                            className="social-link"
                        >
                            LinkedIn
                        </Button>
                        <Button
                            type="text"
                            icon={<GithubOutlined/>}
                            onClick={handleGitHubClick}
                            className="social-link"
                        >
                            GitHub
                        </Button>
                        <Button
                            type="text"
                            icon={<MailOutlined/>}
                            onClick={handleContactClick}
                            className="social-link"
                        >
                            Email
                        </Button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image">
                        <img
                            src="/src/assets/images/hood-balloon.jpeg"
                            alt="Imagine a ballon floating near Mt Hood."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;