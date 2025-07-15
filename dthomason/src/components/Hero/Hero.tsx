import React from 'react';
import {Button, Space, Typography} from 'antd';
import {
    LinkedinOutlined,
    GithubOutlined,
    MailOutlined,
    DownloadOutlined,
} from '@ant-design/icons';
import './Hero.css';
import ICanHelpModalTrigger from "../ICanHelp";

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
                        <ICanHelpModalTrigger />

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
                        <img alt="Imagine a balloon floating near Mt Hood." src="/images/hood-balloon.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;