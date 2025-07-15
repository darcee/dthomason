import type { Question } from './ICanHelp.types';

export const questions: Question[] = [
    {
        id: 'codebase',
        question: "How would you describe your current codebase?",
        options: [
            { id: 'castle', text: '🏰 A majestic castle (well-architected)', points: { legacy: 0, optimization: 2, team: 1 } },
            { id: 'haunted', text: '🏚️ A haunted house (legacy nightmares)', points: { legacy: 3, optimization: 1, team: 0 } },
            { id: 'puzzle', text: '🧩 A jigsaw puzzle missing pieces', points: { legacy: 1, optimization: 2, team: 1 } },
            { id: 'fire', text: '🔥 A dumpster fire, but it\'s MY dumpster fire', points: { legacy: 2, optimization: 1, team: 2 } }
        ]
    },
    {
        id: 'struggle',
        question: "Your team's biggest struggle is...",
        options: [
            { id: 'slow', text: '🐌 Moving slower than a Windows 95 startup', points: { legacy: 1, optimization: 3, team: 1 } },
            { id: 'communication', text: '🗣️ Communication gaps bigger than my Git commits', points: { legacy: 0, optimization: 1, team: 3 } },
            { id: 'refactor', text: '🔄 Stuck in an endless refactor loop', points: { legacy: 2, optimization: 2, team: 1 } },
            { id: 'debt', text: '📚 Drowning in technical debt', points: { legacy: 3, optimization: 1, team: 0 } }
        ]
    },
    {
        id: 'legacy',
        question: "When you see legacy code, you...",
        options: [
            { id: 'scream', text: '😱 Scream internally', points: { legacy: 1, optimization: 0, team: 1 } },
            { id: 'detective', text: '🕵️ Put on your detective hat', points: { legacy: 2, optimization: 1, team: 1 } },
            { id: 'run', text: '🏃 Run away and update your resume', points: { legacy: 0, optimization: 0, team: 2 } },
            { id: 'dive', text: '😤 Roll up your sleeves and dive in', points: { legacy: 3, optimization: 2, team: 1 } }
        ]
    },
    {
        id: 'workflow',
        question: "Your development workflow feels like...",
        options: [
            { id: 'symphony', text: '🎼 A beautiful symphony', points: { legacy: 0, optimization: 1, team: 3 } },
            { id: 'jazz', text: '🎷 Chaotic jazz (somehow it works)', points: { legacy: 1, optimization: 2, team: 2 } },
            { id: 'record', text: '📀 A broken record on repeat', points: { legacy: 2, optimization: 3, team: 1 } },
            { id: 'silence', text: '🔇 Awkward silence', points: { legacy: 1, optimization: 1, team: 3 } }
        ]
    }
];