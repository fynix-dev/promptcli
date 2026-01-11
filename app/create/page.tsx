import Input from "@/components/Input";
import WorkSpace from "@/components/WorkSpace";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PromptCLI - Prompt generator",
  description: "Write better AI prompts. Faster.",
};

const page = () => {

  return (
    <main className="w-full h-auto min-h-screen md:h-screen p-[16px] mt-[50px] bg-primary-bg flex items-center justify-center overflow-scroll md:overflow-hidden">
      <WorkSpace />
    </main>
  )
}

export default page