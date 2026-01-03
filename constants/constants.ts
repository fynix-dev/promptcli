export const withoutPromptcliFeatures: string[] = [
    'Inconsistent results from the same idea',
    'Long trial-and-error conversations',
    'Wasted time refining prompts manually',
    'No clear structure or format',
    'Missing important constraints and context'
];

export const withPromptcliFeatures: string[] = [
    'Turn ideas into clear, structured prompts',
    'Consistent, high-quality results',
    'One-line input → fully detailed prompt',
    'Smart follow-up questions to refine output',
    'Prompts designed to work across any AI'
]

type promptcliFeatures = {
    title: string;
    description: string;
}

export const promptcliFeatures: promptcliFeatures[] = [
    {
        title: "One-Line → Production-Ready Prompt",
        description:
        "Describe your idea in a single sentence. PromptCLI transforms it into a structured, detailed, high-quality prompt automatically."
    },
    {
        title: "Smart Refinement Questions",
        description:
        "PromptCLI asks only the questions that actually matter, helping refine tone, constraints, and output without unnecessary steps."
    },
    {
        title: "Chat to Refine, Not Re-write",
        description:
        "Improve the same prompt through a guided chat instead of rewriting from scratch every time."
    },
    {
        title: "Multi-Format Export",
        description:
        "Export prompts in formats that fit your workflow — plain text, Markdown, JSON, or CLI-ready templates."
    },
    {
        title: "AI-Agnostic Prompt Engine",
        description:
        "Create prompts that work consistently across ChatGPT, Claude, Gemini, and other LLMs."
    },
    {
        title: "Terminal-First Experience",
        description:
        "A clean, minimal interface designed for developers who prefer speed, focus, and terminal-inspired workflows."
    }
    ]