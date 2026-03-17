import { useState } from "react"
import QueryContainer from "../ui/QueryContainer"
import { getFaqList } from "../../services/faqService"

function Queries() {
    const [openIndex, setOpenIndex] = useState(null)

    const generateQuery = () => {
        const arr = getFaqList();

        return arr.map((item, index) => (
            <QueryContainer
                key={index}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
            />
        ))
    }
    return (
        <div className="pricing flex flex-col gap-10 ">
            <span className="font-semibold text-5xl sm:leading-17 sm:text-6xl">
                FAQ
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {generateQuery()}
            </div>
        </div>
    )
}

export default Queries