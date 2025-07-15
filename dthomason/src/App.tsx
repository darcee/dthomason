import { ConfigProvider, Layout, Card, Space } from 'antd';
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
                                    <p></p>
                                </Card>

                                <Card title="Another Card" className="glass-card">
                                    <p></p>
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
