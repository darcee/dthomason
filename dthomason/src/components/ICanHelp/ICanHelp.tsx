import React, { useState } from 'react';
import { Card, Button, Progress, Typography, Space } from 'antd';
import type { Answer, Result, ResultType } from './ICanHelp.types';
// import './ICanHelp.css';
import {questions} from "./questions.ts";
import {results} from "./results.ts";
const { Title, Text, Paragraph } = Typography;


const ICanHelp: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<string, Answer>>({});
    const [showResult, setShowResult] = useState<boolean>(false);


    const handleAnswer = (questionId: string, optionId: string, points: Answer['points']): void => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: { optionId, points }
        }));

        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Calculate result
            setTimeout(() => {
                setShowResult(true);
            }, 500);
        }
    };

    const calculateResult = (): Result => {
        const totals: Record<ResultType, number> = { legacy: 0, optimization: 0, team: 0 };

        Object.values(answers).forEach(answer => {
            Object.entries(answer.points).forEach(([key, value]) => {
                totals[key as ResultType] += value;
            });
        });

        const maxCategory = Object.entries(totals).reduce((max, [key, value]) =>
            value > max[1] ? [key, value] : max
        )[0] as ResultType;

        return results[maxCategory];
    };

    const resetWizard = (): void => {
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
    };

    const handleContactClick = (): void => {
        console.log('Contact clicked - implement your contact logic here');
    };

    const result = showResult ? calculateResult() : null;
    const progressPercent = ((currentStep + 1) / questions.length) * 100;

    return (
        <div style={{paddingTop: '30px'}}>
            <Card>
                {!showResult ? (
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Title level={2} style={{ marginBottom: '8px' }}>
                                🔮 How Can I Make Your Life Better?
                            </Title>
                            <Text type="secondary">
                                Let's diagnose what's slowing you down...
                            </Text>
                        </div>

                        <div>
                            <Progress
                                percent={progressPercent}
                                showInfo={false}
                                strokeColor="#1890ff"
                            />
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                Question {currentStep + 1} of {questions.length}
                            </Text>
                        </div>

                        <div>
                            <Title level={4} style={{ marginBottom: '16px' }}>
                                {questions[currentStep].question}
                            </Title>

                            <Space direction="vertical" size="small" style={{ width: '100%' }}>
                                {questions[currentStep].options.map((option) => (
                                    <Button
                                        key={option.id}
                                        block
                                        size="large"
                                        style={{
                                            height: 'auto',
                                            padding: '16px',
                                            textAlign: 'left',
                                            border: '1px solid #d9d9d9',
                                            borderRadius: '8px'
                                        }}
                                        onClick={() => handleAnswer(questions[currentStep].id, option.id, option.points)}
                                    >
                                        <Text style={{ fontSize: '16px', whiteSpace: 'pre-wrap' }}>
                                            {option.text}
                                        </Text>
                                    </Button>
                                ))}
                            </Space>
                        </div>
                    </Space>
                ) : (
                    <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{result!.emoji}</div>
                            <Title level={2} style={{ marginBottom: '8px' }}>
                                {result!.title}
                            </Title>
                            <Paragraph style={{ fontSize: '16px', color: '#666' }}>
                                {result!.description}
                            </Paragraph>
                        </div>

                        <Card
                            style={{
                                backgroundColor: '#f6ffed',
                                border: '1px solid #b7eb8f',
                                textAlign: 'left'
                            }}
                        >
                            <Title level={4} style={{ color: '#389e0d', marginBottom: '8px' }}>
                                How I Can Help:
                            </Title>
                            <Paragraph style={{ color: '#52c41a', marginBottom: 0 }}>
                                {result!.solution}
                            </Paragraph>
                        </Card>

                        <Card
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                border: 'none',
                                color: 'white'
                            }}
                        >
                            <Title level={4} style={{ color: 'white', marginBottom: '8px' }}>
                                Ready to upgrade from debugging nightmares to engineering dreams?
                            </Title>
                            <Paragraph style={{ color: 'white', marginBottom: '16px' }}>
                                Let's build something amazing together!
                            </Paragraph>
                            <Button
                                type="primary"
                                size="large"
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: 'white',
                                    color: '#667eea'
                                }}
                                onClick={handleContactClick}
                            >
                                Get In Touch
                            </Button>
                        </Card>

                        <Button type="link" onClick={resetWizard}>
                            Take the quiz again
                        </Button>
                    </Space>
                )}
            </Card>
        </div>
    );
};

export default ICanHelp;