import GuideCard from "../ui/GuideCard"

function Guide() {
    return (
        <div className="flex flex-col gap-10 items-start">
            <h1 className="font-semibold text-5xl sm:leading-17 sm:text-6xl">How it works</h1>
            <GuideCard content={"Step 1"} />
            <GuideCard content={"Step 2"} />
            <GuideCard content={"Step 3"} />
        </div>
    )
}

export default Guide