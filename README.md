# PromptCLI

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/fynix-dev/promptcli)

**Write better AI Prompts. Faster.**

PromptCLI turns simple ideas into structured, high-quality prompts so you get better results from any AI. It provides a clean, minimal interface inspired by CLI workflows, optimized for focus, speed, and precision.

## What makes PromptCLI Unique?

PromptCLI is designed to eliminate the trial-and-error of prompt engineering. By transforming one-line ideas into production-ready prompts and asking smart, context-aware questions, it ensures you get consistent, high-quality results from any LLM.

| Without PromptCLI                             | With PromptCLI                                      |
| --------------------------------------------- | --------------------------------------------------- |
| ❌ Inconsistent results from the same idea    | ✔️ Turn ideas into clear, structured prompts        |
| ❌ Long trial-and-error conversations         | ✔️ Consistent, high-quality results                 |
| ❌ Wasted time refining prompts manually      | ✔️ One-line input → fully detailed prompt           |
| ❌ No clear structure or format               | ✔️ Smart follow-up questions to refine output       |
| ❌ Missing important constraints and context  | ✔️ Prompts designed to work across any AI           |

## Key Features

*   **One-Line → Production-Ready Prompt**: Describe your idea in a single sentence. PromptCLI transforms it into a structured, detailed, high-quality prompt automatically.
*   **Smart Refinement Questions**: PromptCLI asks only the questions that actually matter, helping refine tone, constraints, and output without unnecessary steps.
*   **Chat to Refine, Not Re-write**: Improve the same prompt through a guided chat instead of rewriting from scratch every time.
*   **Multi-Format Export**: Export prompts in formats that fit your workflow — plain text, Markdown, JSON, or CLI-ready templates.
*   **AI-Agnostic Prompt Engine**: Create prompts that work consistently across ChatGPT, Claude, Gemini, and other LLMs.
*   **Terminal-First Experience**: A clean, minimal interface designed for developers who prefer speed, focus, and terminal-inspired workflows.

## Technology Stack

*   **Framework**: [Next.js](https://nextjs.org)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
*   **Linting**: [ESLint](https://eslint.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm/bun) installed on your machine.

### Installation & Running

1.  Clone the repo
    ```sh
    git clone https://github.com/fynix-dev/promptcli.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
