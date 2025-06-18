import { ConfigProvider, Layout, Card, Button, Space } from 'antd';
import { customTheme } from './theme/theme';
import './App.css'; // We'll create this next

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <ConfigProvider theme={customTheme}>
            <div className="app-container">
                <Layout className="layout">
                    <Header className="header">
                        <div className="logo">My App</div>
                    </Header>
                    <Content className="content">
                        <div className="content-wrapper">
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
                        My App ©2024
                    </Footer>
                </Layout>
            </div>
        </ConfigProvider>
    );
}

export default App;
