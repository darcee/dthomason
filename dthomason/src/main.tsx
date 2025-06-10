import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#238bb8',
                borderRadius: 8,
            },
            components: {
                Layout: {
                    headerBg: '#eee',
                },
                Menu: {
                    itemBg: '#eee',
                },
            },
        }}
    >
        <App />
    </ConfigProvider>
);