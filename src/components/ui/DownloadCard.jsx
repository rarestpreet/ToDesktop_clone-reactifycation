import assets from "../../assets/index.js";
import InfoButton from "./InfoButton.jsx"
import ProfileCard from "./ProfileCard.jsx"

function DownloadCard() {
    return (
        <div className="review border bg-black border-gray-200 rounded-2xl flex flex-col lg:flex-row overflow-hidden">
            <div className="flex flex-col gap-7 p-5 lg:text-xl text-lg items-start">
                <span className="text-gray-500 font-medium">
                    READY TO START BUILDING?
                </span>
                <span className="text-white font-medium text-4xl">
                    Create your desktop app for free*
                </span>
                <span className="text-gray-500  font-medium">
                    ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.
                </span>
                <button className="text-white bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer
                 flex gap-3 items-center py-3 px-4 rounded-xl">
                    <i class="fa-solid fa-download "></i>
                    Download ToDesktop Builder
                </button>
                <span className="text-gray-500 italic text-sm">
                    *You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.
                </span>
            </div>
            <div className="pl-10 pt-10 max-w-130 self-end">
                <img src={assets.asset46} alt="review-img" />
            </div>
        </div>
    )
}

export default DownloadCard