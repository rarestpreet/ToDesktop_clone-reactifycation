import assets from "../../assets/index.js";
import InfoButton from "./InfoButton.jsx"
import ProfileCard from "./ProfileCard.jsx"

function MainReviewCard() {
    return (
        <div className="review border border-gray-200 rounded-2xl flex flex-col lg:flex-row overflow-hidden">
            <div className="flex flex-col gap-7 p-5 lg:text-xl text-lg items-start">
                <img src={assets.asset44} className="w-40" alt="logo" />
                <span className="font-medium">
                    ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.
                </span>
                <div className="flex flex-wrap gap-3">
                    <InfoButton content={"Chromeless UI"} icon={true} />
                    <InfoButton content={"Native spellcheck"} icon={true} />
                    <InfoButton content={"Global hotkey to create task"} icon={true} />
                    <InfoButton content={"Notification count in the dock"} icon={true} />
                </div>
                <span className="text-gray-500">
                    “ToDesktop provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver new and improved features to our customers within days.”
                </span>
                <ProfileCard
                    profile={{ pic1: "", pic2: assets.asset45 }}
                    name={"Zeb Evans"}
                    company_name={"Founder & CEO, ClickUp"} />
            </div>
            <div className="pl-10 pt-10 max-w-130 self-end">
                <img src={assets.asset46} alt="review-img" />
            </div>
        </div>
    )
}

export default MainReviewCard