import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const request = await req.json();

        const system = request.system;
        const user = request.user;

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "meta-llama/llama-3.3-70b-instruct:free:nitro",
                "messages": [
                {
                    "role": "system",
                    "content": system
                },
                {
                    "role": "user",
                    "content": user
                }
                ],
            response_format: {
                type: 'json_schema',
                json_schema: {
                    name: 'PromptArchitectResponse',
                    schema: {
                        type: 'object',
                        properties: {
                            isQueryPromptBased: {
                                type: 'boolean',
                                description: 'True if the user input is a prompt idea, false if it is a general query.'
                            },
                            prompt: {
                                type: 'string',
                                description: 'The detailed, structured prompt generated from the user input.'
                            },
                            reply: {
                                type: 'string',
                                description: 'A pleasing and positive reply to the user. Do not add any questions here. Just a friendly reply'
                            },
                            questions: {
                                type: 'array',
                                description: 'Questions to help refine the prompt, each with an example answer.',
                                items: {
                                    type: 'object',
                                    properties: {
                                    question: {
                                        type: 'string',
                                        description: 'A question for the user to refine the prompt.'
                                    },
                                    example_answer: {
                                        type: 'string',
                                        description: 'An example answer to the question.'
                                    }
                                },                      
                                required: ['question', 'example_answer']
                            }
                            }
                        },
                        required: ['isQueryPromptBased', 'prompt', 'reply', 'questions']
                    }
                }
            }
            })
        });

        if(!response.ok){
            throw new Error("Failed to fetch from OpenRouter API");
        }

        return NextResponse.json({status: "success", message: await response.json() })
       
    } catch (error) {
        console.log(error);
        return NextResponse.json({status: "error", message: error instanceof Error ? error.message : "Unknown error" })
    }
}