import GuideCard from "../elements/GuideCard"

function Guide() {
    return (
        <div className="px-10 flex flex-col gap-10 items-start">
            <h1 className="font-semibold text-5xl sm:leading-17 sm:text-6xl">How it works</h1>
            <GuideCard id={1} />
            <GuideCard id={2} />
            <GuideCard id={3} />
        </div>
    )
}

export default Guide