import BentoGrid from "@/components/BentoGrid"
import { withoutPromptcliFeatures, withPromptcliFeatures, promptcliFeatures } from "@/constants/constants"

const page = () => {
  return (
    <main className="w-full h-full min-h-screen bg-primary-bg bg-[url('/images/grid.png')] bg-contain bg-repeat mt-[50px] md:p-[16px] p-[8px]">
      {/* hero layout */}
      <div className="md:w-[90%] w-full mx-auto h-auto md:p-8 flex flex-col items-center md:gap-[28px] gap-[16px]">
        <h1 className=" w-full text-center font-inter md:text-[50px] text-[32px] font-bold text-primary-text ">Write better <span className="text-accent-primary">AI Prompts</span>. Faster</h1>
        <p className="md:w-[70%] w-full text-center md:text-[20px] text-[16px] text-primary-text ">PromptCLI turns simple ideas into <span className="font-bold">structured</span>, <span className="font-bold">high-quality</span> prompts — so you get better results from any AI.</p>
        <button className="btn btn-wide">Create Prompt</button>
      </div>

      {/* features comparison layout */}
      <div className="md:w-[65%] w-[90%] mx-auto h-auto mt-[64px] flex flex-col md:flex-row flex-center justify-between gap-[32px] ">
        {/* container for features without promptcli */}
        <div className="container">
          <div className="w-full">
            <p className="text-[12px] text-muted-text">Without PromptCLI</p>
            <div className="w-full flex flex-col gap-[8px]">
              {
                withoutPromptcliFeatures.map((feature, index) => (
                  <p className="text-[14px] text-primary-text" key={index}>❌ {feature}</p>
                ))
              }
            </div>

          </div>
        </div>

        {/* container for features with promptcli */}
        <div className="container">
          <div className="w-full">
            <p className="text-[12px] text-muted-text">With PromptCLI</p>
            <div className="w-full flex flex-col gap-[8px]">
              {
                withPromptcliFeatures.map((feature, index) => (
                  <p className="text-[14px] text-primary-text" key={index}>✔️ {feature}</p>
                ))
              }
            </div>

          </div>
        </div>
      </div>



      {/* what makes promptcli unique */}
      <div className="h-auto mt-[64px] md:w-[80%] w-full mx-auto">
        <h1 className="w-full text-center md:text-[36px] text-[24px] font-bold font-inter">What makes PromptCLI <span className="text-accent-primary">Unique</span>?</h1>
      
        <div className="w-full flex flex-wrap gap-[20px] mt-[28px] items-center justify-center">
            {
              promptcliFeatures.map((feature, index) => (
                <div key={index} className="container w-[300px] min-h-[170px] flex">
                  <div className="flex items-center justify-between gap-[12px] p-[4px]">
                    <h1 className="font-bold text-[44px]">{index+1}</h1>
                    <div className="flex flex-col gap-[4px]">
                      <p className="w-full text-left text-[14px] text-primary-text">{feature.title}</p>
                      <p className="w-full text-left text-[12px] text-muted-text">{feature.description}</p>
                    </div>
                  </div>


                </div>
              ))
            }
        </div>
      </div>

      <BentoGrid />
    </main>
  )
}

export default page