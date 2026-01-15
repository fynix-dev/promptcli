"use client";
import { initialSystemPrompt } from "@/constants/constants";
import { useState } from "react";

type QuestionAnswer = {
  question: string;
  example_answer: string;
};

type TabType = "left" | "middle" | "right";

type InputProps = {
  setGeneratedPrompt: React.Dispatch<React.SetStateAction<string>>;
  setActiveTab: React.Dispatch<React.SetStateAction<TabType>>;
  setQuestions: React.Dispatch<React.SetStateAction<QuestionAnswer[]>>;
  setChat: React.Dispatch<React.SetStateAction<string[]>>;
  setLoadingPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  loadingPrompt: boolean;
};

const Input = ({
  setGeneratedPrompt,
  setChat,
  setQuestions,
  setLoadingPrompt,
  setActiveTab,
  loadingPrompt
}: InputProps) => {

  const [input, setInput] = useState<string>("");

  const sendRequest = async (userInput: string) => {
    if (!userInput.trim()) return;

    const system = initialSystemPrompt;
    const payload = { system: system, user: userInput };

    // Add user message
    setChat((prev) => [...prev, userInput]);
    setLoadingPrompt(true);

    try {
      const response = await fetch("/api/ai", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      /* HTTP ERROR */
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      /* STRUCTURE VALIDATION */
      if (
        !data?.message?.choices?.[0]?.message?.content
      ) {
        throw new Error("Invalid API response");
      }

      const requiredData =
        data.message.choices[0].message.content;

      const res = JSON.parse(requiredData);

      setGeneratedPrompt(res.prompt);
      setQuestions(res.questions);
      setChat((prev) => [...prev, res.reply]);

    } catch (error: any) {
      console.error(error);

      let msg = "Something went wrong";

      if (!navigator.onLine) {
        msg = "No internet connection";
      } else if (error.message.includes("Server")) {
        msg = "Server error. Try again later.";
      } else if (error.message.includes("Invalid")) {
        msg = "Unexpected response from AI";
      }

      setChat((prev) => [...prev, msg]);
    } finally {
      setLoadingPrompt(false);
      setActiveTab("middle");
      setInput("");
    }
  };

  return (
    <section>
      <div className="w-full h-[40px] flex items-center rounded-[4px] bg-border-subtle">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="resize-none w-[90%] text-primary-text font-medium text-[14px] p-[4px] focus:outline-none bg-transparent"
          placeholder="Describe your idea here"
        />

        <div className="w-[10%] h-full bg-accent-primary p-[2px] rounded-tr-[4px] rounded-br-[4px] flex items-center justify-center">
          <button
            onClick={() => sendRequest(input)}
            disabled={loadingPrompt}
            className={`font-bold text-[24px] h-full ${loadingPrompt ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Input;
