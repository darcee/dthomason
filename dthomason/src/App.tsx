import { ConfigProvider, Layout, Card, Button, Space } from 'antd';
import { customTheme } from './theme/theme';
import './App.css';
import Hero from "./components/Hero/Hero.tsx";
import { HeartFilled } from '@ant-design/icons';
const { Content, Footer } = Layout;

function App() {
    return (
        <ConfigProvider theme={customTheme}>
            <div className="app-container">
                <Layout className="layout">
                    <Content className="content">
                        <div className="content-wrapper">
                            <Hero
                                name="Darcee Thomason"
                                role="Software Engineering, Opinions, and Random Thoughts"
                                subtitle= {
                                    <>
                                        <HeartFilled style={{ color: 'red', marginRight: '0.4rem' }} />  Engineering with Empathy
                                    </>
                                }
                            />
                            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                                <Card title="Welcome" className="glass-card">
                                    <p>This is your app with the beautiful gradient background!</p>
                                    <Space>
                                        <Button type="primary">Primary Button</Button>
                                        <Button>Default Button</Button>
                                    </Space>
                                </Card>

                                <Card title="Another Card" className="glass-card">
                                    <p>Notice how the cards have a semi-transparent glass effect that lets the gradient show through.</p>
                                </Card>
                            </Space>
                        </div>
                    </Content>
                    <Footer className="footer">
                        D.Thomason ©2025
                    </Footer>
                </Layout>
            </div>
        </ConfigProvider>
    );
}

export default App;
