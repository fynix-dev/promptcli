type PricingCardProps = {
    free: boolean;
    title: string;
    price: string;
    credits?: string;
    features: string[];
}

const PricingCard = ({free, title, price, credits, features} : PricingCardProps) => {
  return (
    <div className="card flex items-stretch justify-baseline w-96 bg-secondary-bg border-2 border-dashed rounded-[4px] border-border-strong shadow-sm hover:border-accent-primary hover:translate-y-[-1px] transition-all duration-300">
        <div className="card-body flex flex-col items-stretch justify-between">
            <span className={`badge badge-xs badge-warning ${title == 'Pro Pack' ? 'opacity-100' : 'opacity-0'}`}>Most Popular</span>
            <div className="flex justify-between items-end">
                <h2 className="text-2xl font-bold">{title}</h2>
                <span className="text-[16px]">{price}{free ? ' credit' : `/${credits}credits`}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs w-full">
                {
                    features.map((feature, index) => (
                        <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-[14px]">{feature}</span>
                        </li>
                    ))
                } 
            </ul>
            <div className="mt-6">
                <button className="btn btn-primary btn-block">{free ? 'Get Started' : 'Buy Now'}</button>
            </div>
        </div>
    </div>
  )
}

export default PricingCard