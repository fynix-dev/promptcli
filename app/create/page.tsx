import Input from "@/components/Input";
import WorkSpace from "@/components/WorkSpace";
import { exampleChat } from "@/constants/constants";
import type { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "PromptCLI - Prompt generator",
  description: "Write better AI prompts. Faster.",
};

const page = () => {

  return (
    <main className="w-full h-screen mt-[50px] bg-primary-bg flex items-center justify-center overflow-y-hidden">
      <WorkSpace />
    </main>
  )
}

export default page