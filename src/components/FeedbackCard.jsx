import { quotes } from "../assets"

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 my-5 feedback-card cursor-pointer sm:mr-5 md:mr-10">
        <img src={quotes}  alt="quotes" className="w-[42px] h-[27px] object-contain" />
        <p className="font-poppins font-normal text-lg leading-[32px] text-white my-10">{ content }</p>

        <div className="flex flex-row">
            <img src={img} className="w-[48px] h-[48px] rounded-full" alt={name} />

            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-xl leading-[32px] text-white">{ name }</h4>
                <p className="font-poppins font-normal text-base leading-[24px] text-dimWhite"> { title }</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard