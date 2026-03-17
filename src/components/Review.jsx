import assets from "../util/assets.js";
import MainReviewCard from "../elements/MainReviewCard.jsx"
import ReviewCard from "../elements/ReviewCard.jsx"
import DownloadCard from "../elements/DownloadCard.jsx"

function Review() {
    return (
        <div className="review flex flex-col gap-10 items-start">
            <h1 className="font-semibold text-5xl sm:leading-17 sm:text-6xl">Customer stories</h1>
            <MainReviewCard profile={assets.asset45} sample={assets.asset46} />
            <div className="flex flex-col lg:flex-row gap-5">
                <ReviewCard
                    profile={{ pic1: assets.asset47, pic2: assets.asset48 }}
                    name={"Rick Pastoor"}
                    company_name={"Rise"} />
                <ReviewCard
                    profile={{ pic1: assets.asset47, pic2: assets.asset48 }}
                    name={"Rick Pastoor"}
                    company_name={"Rise"} />
                <ReviewCard
                    profile={{ pic1: assets.asset47, pic2: assets.asset48 }}
                    name={"Rick Pastoor"}
                    company_name={"Rise"} />
            </div>
            <DownloadCard />
        </div>
    )
}

export default Review