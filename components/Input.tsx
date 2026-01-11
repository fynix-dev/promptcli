"use client";
import { initialSystemPrompt } from "@/constants/constants";
import { useState } from "react";

type QuestionAnswer = {
    question: string;
    example_answer:string;
}

type InputProps = {
  setGeneratedPrompt: React.Dispatch<React.SetStateAction<string>>;
  setQuestions: React.Dispatch<React.SetStateAction<QuestionAnswer[]>>;
  setChat: React.Dispatch<React.SetStateAction<string[]>>;
  setLoadingPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({setGeneratedPrompt, setChat, setQuestions, setLoadingPrompt}: InputProps) => {
  const [input, setInput] = useState<string>('');
  const arr: string = '>';

  const sendRequest = async (userInput: string) => {
      const system = initialSystemPrompt;
      const playload = {
          system: system,
          user: userInput
      }

      //Update chat userInput
      setChat((prevChat) => [...prevChat, userInput]);
      //setChat((prevChat) => [...prevChat, 'Thinking...']);

      //Fetch response from API
      let data;

      setLoadingPrompt(true);
      try {
        const response = await fetch('/api/ai', {
          cache: "no-store",
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(playload)
        });

        data = await response.json();
        
        if(data.message.choices[0].message.status !== "error"){
          const requiredData = data.message.choices[0].message.content;
          const res = JSON.parse(requiredData);
          setGeneratedPrompt(res.prompt);
          setQuestions(res.questions);
          
          //Update chat with AI response
          setChat((prevChat) => [...prevChat, res.reply]);
        }else{
          setChat((prevChat) => [...prevChat, "An error occured while fetching"]);
        }
        
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }

      setLoadingPrompt(false);

      console.log(data);
      const chatInput = document.getElementById("chat-input");
      chatInput!.innerText = "";


  }

  return (
    <section>
        <div className="w-full h-[40px] flex items-center rounded-[4px] bg-border-subtle">
            <input onChange={(e) => setInput(e.target.value)} id="chat-input" className="resize-none w-[90%] text-primary-text font-medium text-[14px] p-[4px] focus:outline-none" placeholder="Describe your idea here" />
            <div className="w-[10%] h-full bg-accent-primary p-[2px] rounded-tr-[4px] rounded-br-[4px] flex items-center justify-center cursor-pointer focus:outline-none">
                <button onClick={() => sendRequest(input)} className="font-bold text-[24px] h-full cursor-pointer">{arr}</button>
            </div>
        </div>
    </section>
  )
}

export default Input