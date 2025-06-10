// src/App.tsx
import { Layout, Menu } from 'antd';
import {Hero} from "./components/Hero.tsx";
const { Header, Content, Footer } = Layout;

export default function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div
                    className="logo"
                    style={{
                        color: '#333',
                        fontSize: '1.4rem',
                        flex: 1,
                    }}
                >
                    Darcee Thomason
                </div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    selectable={false}
                    style={{ borderBottom: 0 }}
                    items={[
                        { key: '1', label: 'Home' },
                        { key: '2', label: 'Projects' },
                        { key: '3', label: 'Contact' },
                    ]}
                />
            </Header>

            <Content style={{ padding: '40px 24px' }}>
                <Hero />
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                © {new Date().getFullYear()} Darcee Thomason
            </Footer>
        </Layout>
    );
}
