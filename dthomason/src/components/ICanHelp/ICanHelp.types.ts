export interface Points {
    legacy: number;
    optimization: number;
    team: number;
}

export interface Option {
    id: string;
    text: string;
    points: Points;
}

export interface Question {
    id: string;
    question: string;
    options: Option[];
}

export interface Answer {
    optionId: string;
    points: Points;
}

export interface Result {
    title: string;
    description: string;
    solution: string;
    emoji: string;
}

export type ResultType = 'legacy' | 'optimization' | 'team';