import { Typography, Button } from 'antd';
const { Title, Paragraph } = Typography;

export function Hero() {
    return (
        <div style={{textAlign: 'center', padding: '80px 0'}}>
            <Title level={1}>Hi, I’m Darcee</Title>
            <Paragraph>
                I build beautiful, high-performance web apps with React and AWS.
            </Paragraph>
            <Button type="primary" size="large" href="#projects">
                View My Work
            </Button>
        </div>
    );
}