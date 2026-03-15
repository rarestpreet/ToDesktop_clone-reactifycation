import assets from "../util/assets"
import GuideCardChecklist from "./GuideCardChecklist"

function GuideCard({ id }) {
    return (
        <div className="flex flex-col lg:flex-row gap-15 border border-gray-300 rounded-3xl p-5">
            <div className="flex flex-col gap-5 items-start">
                <span className="border border-amber-400 p-1 rounded-lg bg-amber-100 shadow-lg">Step {id}</span>
                <h1 className="font-medium text-3xl">Bootstrap straight from your web app</h1>
                <span className="text-lg">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</span>
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <GuideCardChecklist />
                    <GuideCardChecklist />
                    <GuideCardChecklist />
                    <GuideCardChecklist />
                    <GuideCardChecklist />
                    <GuideCardChecklist />
                </div>
            </div>
            <div className="self-center">
                <img src={assets.asset66}
                    className="max-h-96"
                    alt="step-guide-image" />
            </div>
        </div>
    )
}

export default GuideCard