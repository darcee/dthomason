import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import 'antd/dist/reset.css';
import App from './App';

Amplify.configure(outputs);

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