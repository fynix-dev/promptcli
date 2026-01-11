"use client";

import { useState } from "react";
import Input from "./Input";
import Markdown from "react-markdown";
import Questions from "./Questions";

type QuestionAnswer = {
  question: string;
  example_answer: string;
};

const WorkSpace = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [chat, setChat] = useState<string[]>([]);
  const [questions, setQuestions] = useState<QuestionAnswer[]>([]);
  const [loadingPrompt, setLoadingPrompt] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-[75%] flex flex-col md:flex-row gap-3 p-2 overflow-hidden">

      {/* LEFT */}
      <div className="container flex flex-col md:flex-1 h-[70vh] md:h-full overflow-hidden">

        <p className="muted-text mb-2">Chat</p>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {chat.map((message, index) => (
            <div
              key={index}
              className={`w-full flex mb-2 ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              }`}
            >
              <p
                className={`text-[14px] p-2 ${
                  index % 2 === 0
                    ? "bg-border-subtle text-primary-text !rounded-tr-[0px] rounded-[8px] w-[80%]"
                    : "text-primary-text w-[90%]"
                }`}
              >
                {message}
              </p>
            </div>
          ))}

          {loadingPrompt && (
            <p className="text-[14px] text-primary-text">Thinking...</p>
          )}
        </div>

        {/* INPUT */}
        <div className="mt-2 shrink-0">
          <Input
            setGeneratedPrompt={setGeneratedPrompt}
            setChat={setChat}
            setQuestions={setQuestions}
            setLoadingPrompt={setLoadingPrompt}
          />
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex flex-col md:flex-1 h-[100vh] md:h-full overflow-hidden gap-[12px]">

        {/* TOP */}
        <div className="container h-[15%] min-h-[60px] shrink-0 flex items-center justify-center">
          <p className="muted-text">Middle Top Section</p>
        </div>

        {/* BOTTOM */}
        <div className="container flex-1 flex flex-col overflow-hidden">

          <p className="muted-text mb-2 shrink-0">
            Generated Prompt
          </p>

          {/* FIXED HEIGHT SCROLL AREA */}
          <div className="flex-1 overflow-y-auto p-3 text-[14px] no-scrollbar">

            {generatedPrompt ? (
              <Markdown>{generatedPrompt}</Markdown>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="muted-text text-center">
                  Generated prompt will appear here
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="container flex flex-col md:flex-1 h-[70vh] md:h-full overflow-hidden">

        <p className="muted-text shrink-0">Questions</p>

        <div className="flex-1 overflow-y-auto mt-2 no-scrollbar">

          {questions.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <p className="muted-text text-center">
                Questions will appear here
              </p>
            </div>
          ) : (
            <Questions questions={questions} />
          )}

        </div>

        <button className="btn mt-2 shrink-0">Refine</button>
      </div>
    </div>
  );
};

export default WorkSpace;
