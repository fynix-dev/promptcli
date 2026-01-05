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
        "Describe your idea in a single sentence. PromptCLI transforms it into a structured, detailed, high-quality prompt automatically.",
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


type Audience = {
  title: string;
  description: string;
  icon?: string; // lucide / heroicon / emoji key
};

export const audience: Audience[] = [
  {
    title: "Software Developers",
    description:
      "Developers who use AI daily for coding and debugging. PromptCLI turns rough ideas into precise, reusable prompts that produce consistent results.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nO2Yv2sUQRTHJ4gKBu69TWGwEVvB0kYb/QNiq72CpZaizbx3kESxulJIZaVXavDeuxOu0/xQEBHFJp0SsLBSEH+szO4eRLncLrc/bifsF6Y4Zub75rMz82bmjGnUqCR17REUugdKn1E59KmA8CdQWnUMBpXvznpABQCtGEflfgQ9Pmc8UyD2/GhmzIjKeCocjb8BqSsIel7MgQMxngobkJoJG5A86nYPodIWKL0xPoOg2KUontCO1yCgtB7Ho9veggQDexKVfqHyj/nny4vegoDwShLrUZG+WClI/HjbjWL1+UKtQFD5Eih/QOGP0QttglpCV1wMEHpvwnDun8ownEPlTRB66zwrAwnUnkHlwZ57zmuXVlOCDZO2N8bWC23s8Ru4GKWBtMQugFAHhX/GKZS/gtAt86xzdFK/hX77NAr9AaHvsL4ajG306sFh0PZ1FP6SjOc3KD/MkhSyg+wXRO1xk0ERfAy+VsbHwqwgeab9xBN7zA3G9W317dlply8Iv8wN4kymBQGla8mX3c7apzSQXOtXeDseSPuqyaBWmUtr2iBuKY3aLer9+YnmOfYhFph+N8cGEF5Lzo5O+mBoq7L0u9+BCEov/q+DoUVQ/ubSrku/qV5CG9HhqhUeiJnM+3Qz8R0W6Vs5CCi9i1Jur33Z+AoCPXsxeTztpt3Bag2CSo+TTb5clGflIO5scQ+nKH327CnjKwj2+U40G8pPi/CbHYjQTrw/7FIRfjMDcXei6F6U8j4pUtj8QVczYQNSM2EDUncQ9LyYAwPSqJEpRX8Bh9J4lU8QCT4AAAAASUVORK5CYII="
  },
  {
    title: "Everyday AI Users",
    description:
      "People who use AI for daily tasks like writing, learning, or problem-solving. PromptCLI helps them get better answers without knowing prompt engineering.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADdUlEQVR4nO2az08TQRTHB+FAInSmGPSmGP0f9A/wF6LRqCfjDzAmGqMHEw0HjfNeiUpiUC/qzZ7tGdn34NDojYgeMJho1Jr4I14I/rzAoWbaLWyl227bLbRlvsk77c689z7Z+bXzhLCysrKysrIqS0ndJhmeK8Z0IZOMf5WDh0RIkqQPZ/r080f4TCQSrWKlFJ3Qm/2C8djjsPyZvkr5MzGJlZJ0dI+H/lPFOJwzSfAj84wgHpY/01fWV6Zvj6+M72wcju4RqwKAY/15wTKmagXA9J0XB8f6LQCuMYDOiVsbJAMqgleS4M/yCc8HQG3MF8DSkMzE+FIygom9quSjDvYpwrliQdUbgDwjnIuO6/0VJR8Zx72KcMHT4aQiGMlMPgyPSgGQBNPeCasac/sqPgSyMQ27MU56ICxECHeXlXx3Uncogu+5T8qsw97n61lv9KwCVxYfJBKtkuGX2+6BCEmS8aG7v/jpXe8lw9VcHB1jN7vz2jj6SG7ISoZvm/jO+sAOFcGlxfWVYseXvZBOt0iGT26iXzoZd8ikVpLw/tIXA6erzjyXDMGAp997xlfXuN4pCb+6E+7Hgnk4cNLzBV8ox+GY6+y9SbbgO+Oxs0XG3luR1O0iLCV1uyJ45zsPEQwUbJdOtxg47lcwGtifJHjjAnhS7D3FeF0RzP8XzHRkbGibCFkR0tsl4et80DCvCK4VjZEw4Q6fmcDOVBlruRod2hJ18LwZj1HGXnNOELVSUreZWd34ijCcC7L99dtDFG/E4W9mVksWAFUDgOvTJONnyUNb1ywAZZZnB/tqDkCGuJsL0yTFzgit19UcgFrzcwBZAHHR4LIAyAKIWwBsAaQtALYAUsEbsQWQsgDYAkhbAGQBxEUdSI7ejkqGy5JgsIgNFDoiNwUARXg34I+Sg00KAOLBfpXlX9M1I4BUOVf1pdr6ygJgCyBlAbAFkK5DAGt2FRgJtA8gfaApAchM8QUMVnJZUhEAyTgTpD6gEVRRfYDMVYgQfvCrEGkIVVohoggvLo2t2AnRoFIUO1VRjVD3sioxPCoaTJL1sVyFedlVYkYR1nvy6gQJX5hTWYkj6apb9uQIU564F6Sjd4lKFGXsVYyzQe/s69Bmo6T3iWoUId2lCLShKgl/10FSxTdDmRhhShHeMD9SqkreysrKyspKNLX+Af+8Z8wbQ940AAAAAElFTkSuQmCC"
  },
  {
    title: "Frontend & UI Engineers",
    description:
      "Generate UI copy, component requirements, design constraints, and UX-focused prompts with clarity and structure.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1ElEQVR4nO2YzQnDMAxGtYGUrbpV462sa0MXcQdpcU7BFBz/UKvO90BHCT2QQDYRAKAIVvcUdW/Lwd5tWZHRTcrJOC1CRhGIGEMuKyLGgy4nQkYRiMwkwgPPFk7OkSYRS4stPUToxwhEaPLRYu+2Ycuu66ObiCUEIkS0+PuN1b0KRyLEvJ412ndE11A536FnjWaRmnFLc3rUiEAkAhGFyA5EIhBJgMgBiEQgkgCRAxCZ/oxf9kdRWSPfH1ZtNZpFLCEQ+XcRMR6UY+RnnFR+2gEAKMsHfQ/Il0eNXugAAAAASUVORK5CYII="
  },
  {
    title: "Indie Hackers & Builders",
    description:
      "Build faster as a solo creator. PromptCLI helps you move from idea to execution without trial-and-error prompting.",
    icon: "data:image/png;base64,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"
  },
  {
    title: "AI Power Users",
    description:
      "For users who work across multiple AI models and want consistent, high-quality prompts that can be reused and shared.",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEM0lEQVR4nO1ZvW8URxQf3AVxN3PnuICYJoACKUIaCEpSJwgC4i8wEvQIASmTeW9BoPDRhMYUpMEBhAJBFOf3FiTjSNACBfwHqYMhChG2c9GbnV0f9+Xb0+3drvBPGmm1Ozszb97X780otYY1rA5rxzTDH5rgoTyroqJCdq9hrEsrs/1GFRWG8fdYEMN4WxUR46HdZAgXDcHbuH04e2ajKhoMwSWnCcJbrjmtwAVVJBjGA4ZhyTAum5r9zFCw0z0TLlZmcb8qhjmJJmDJa+PH+JtmBP9u0TBelL4qV7B2zEUngjt+keLYy4bhB1Wvr0v61evrDIGNvnmBCO6UQ/w2s9BcYvxCMz7TDE/luVtfTTifRCbn1HhLzKlT/8jUxG/gbfyfyzNZQDM+b5jkxTs72yIIPGwRhIKdHQURf2kSxDDODVyICtkvIwHwT2nyXLlvv+74g7VjYh6SJxoWtyw+0WxamjAwBP8lQjPedokyC9MyDFe9IGel+YX90su/kickxJrYVwhs/E0z4Ipv4PlMc8rEnN2gCV/LrpXCYJs0eZZ343d/KvU6TmUW93thXPjVbD93mpDwG9p9KmtoCo54bcw3O7NmOJpmLMN4sSUhEp5Xw4BmfBRNGEwlC6JgygvyuBAUpTQbfOLMiHFh4z27Pn4/+fjSB4bwLxGmWrOfphnTSG5JIhP8poYBzfizn/BK64Jw2mvlcpoxy1E0Gx6Nr9DpzZrwjVCLdrsu7+Sb9KnW7GSqwopcnpkbSmEVO6MmuNapj2ac8bt7U+URmuF7L8RLfd9+3KlfuXZ6i/iPj2qnVP6EgIhuk/1utf4mtAc9IVzKhTDVmp0UE1lhqnis13814fGEwTLeTOUzg8I42e0SnSLHliiEC71ool3h1GBmb2RMGVtliQlHO4IjSbKLSR3BtW4+sRq8z8w0aEc25pHMNTFnNwxMgArjV0IAHXdamWhB8kTaxNYNPjRfiTXktfRa5pY19D9waPc01hOe9M0bhsONGXvQkLFlDjcXeaoebd7z1YqztjCETxrqibPCYNWQUQqDbb4McPWMrOn9FaQk9TbBixbTomAqc9OiYKqdaZVruKvvgaU8lcquxdkJpwfu7ITTA3f2ZkhlJ0VRS/hlnJEQqvpEmexWzfBr5uG3HaphsKMlITIeUCmhyR7SDK+GmhDbQWiFJrixkhzxuOoRmvFE7AOa8Hr1wZmP1KihCU4mpLEHzYgmEtLIeELlCZrwVGxmXWl85BPenOCkyiO0N7PuhZVzbOlzQ+UV46HdpAn+caVuGOxoz6ecSf07Etre1+ED4fSgDh9GgiyOg0aGtgd0DIfjZKeKAs1wtPm+ot8j05HCVZMSYv0htoTjiHTC32kOsXOBd64VGM7508erqmiouBI5xUVPnqFTXL3lGiV3GQpPpbIrk9096vWsQY0Q/wOzO4+Az2bHBwAAAABJRU5ErkJggg=="
  }
];
