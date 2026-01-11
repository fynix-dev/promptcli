
type QuestionAnswer = {
    question: string;
    example_answer:string;
}
type QuestionAnswerArray = QuestionAnswer[];

type InputProps = {
  questions: QuestionAnswerArray;
}
const Questions = ({ questions }: InputProps) => {
  return (
    <section className="w-full h-full flex flex-col gap-[8px] overflow-y-scroll no-scrollbar p-[8px] ">
        {
            questions.map((questionAnswer: QuestionAnswer, index: number) => (
                <div key={index} tabIndex={0} className="collapse collapse-arrow bg-primary-bg !overflow-visible">
                    <div className="collapse-title text-[14px] text-primary-text">{questionAnswer.question}</div>
                    <div className="collapse-content text-[14px] text-primary-text">
                        <input className="w-full p-[4px] border border-border-subtle rounded-[4px] focus:outline-none" placeholder="Your answer..." />
                        <p className="muted-text mt-[4px]">Example answer: {questionAnswer.example_answer}</p>
                    </div>
                </div>
            ))
        }
    </section>
  )
}


export default Questions