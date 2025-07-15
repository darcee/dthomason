import type { Result, ResultType } from './ICanHelp.types';

export const results: Record<ResultType, Result> = {
    legacy: {
        title: "The Legacy Code Whisperer",
        description: "You're dealing with code that's older than some of your junior developers! Your systems are crying out for some archaeological programming and modernization.",
        solution: "I can help you navigate those ancient codebases, refactor safely, and bring your systems into the modern era without breaking everything.",
        emoji: "🏺"
    },
    optimization: {
        title: "The System Optimization Seeker",
        description: "Your systems are running, but they're not running well. Performance issues and inefficiencies are slowing everyone down.",
        solution: "Let's turn that sluggish beast into a performance machine. I'll help optimize your systems and streamline your workflows.",
        emoji: "🚀"
    },
    team: {
        title: "The Team Harmony Hunter",
        description: "Your developers need a conductor for this orchestra. Communication gaps and process issues are creating more bugs than features.",
        solution: "I can coach your team, improve processes, and help create the collaborative environment where great software thrives.",
        emoji: "🎭"
    }
};