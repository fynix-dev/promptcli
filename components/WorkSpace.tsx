"use client";

import { useEffect, useState } from "react";
import Input from "./Input";
import Markdown from "react-markdown";
import Questions from "./Questions";

type QuestionAnswer = {
    question: string;
    example_answer:string;
}

const WorkSpace = () => {
    const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
    const [chat, setChat] = useState<string[]>([]);
    const [questions, setQuestions] = useState<QuestionAnswer[]>([]);
    const [loadingPrompt, setLoadingPrompt] = useState<boolean>(false);

  return (
    <div className="w-[95%] h-[75%] flex gap-[12px] items-stretch justify-center mb-[50px]">
        {/* Left */}
        <div className="container flex-1 flex items-stretch flex-col gap-[6px] justify-between">
          <p className="muted-text mb-[12px]">Chat</p>

          {/* Chat output */}
          <div className="w-full flex-8 overflow-y-scroll no-scrollbar">
            {
              chat.map((message: string, index: number) => (
                <div key={index} className={`w-full flex h-auto mb-[8px] ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <p className={`text-[14px] text-primary-text p-[8px] ${index % 2 === 0 ? 'bg-border-subtle rounded-bl-[8px] rounded-tr-[0px] rounded-tl-[8px] rounded-br-[8px] max-w-[80%]' : 'w-full'}`}>{message}</p>
                </div>
              ))
            }
            <div className={`w-full h-auto mb-[8px] justify-start ${loadingPrompt ? 'flex' : 'hidden'}}`}>
              <p className={`text-[14px] text-primary-text p-[8px] w-full ${loadingPrompt ? '' : 'hidden'}`}>Thinking...</p>
            </div>
          </div>
          
          {/* Chat input */}
          <div className="w-full flex-1">
            {/* Input area */}
            <Input 
              setGeneratedPrompt={setGeneratedPrompt} 
              setChat={setChat} 
              setQuestions={setQuestions} 
              setLoadingPrompt={setLoadingPrompt}
            />
          </div>
        </div>

        {/* Middle */}
        <div className="flex-1 flex flex-col gap-[12px] items-stretch">
          {/* Top */}
          <div className="w-full h-[15%] container"></div>

          {/* Bottom */}
          <div className="w-full h-[85%] flex-8 container">
            <p className="muted-text mb-[2px]">Generated Prompt</p>
            <div className="w-full overflow-y-scroll p-[12px] h-[95%] text-[14px] no-scrollbar">
                {
                  generatedPrompt ? 
                    <Markdown>{generatedPrompt}</Markdown> 
                  : ( 
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="muted-text w-full text-center">Generated prompt will appear here</p>
                    </div>
                  )
                }
            </div>
          </div>
        </div>
        
        {/* Right */}
        <div className="container flex-1 flex items-stretch justify-between flex-col p-[8px]">
            <p className="muted-text">Questions</p>

            {/* Questions */}
            <div className="w-full max-h-[80%] mt-[8px]">
              {
                questions.length === 0 ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="muted-text w-full text-center">Questions will appear here</p>
                  </div>
                  )
                  :
                    <Questions questions={questions}/>
                
              }
            </div>

            <button className="btn">Refine</button>
        </div>
      </div>
  )
}

export default WorkSpace