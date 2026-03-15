import FeatureCard from "../elements/FeatureCard"
import assets from "../util/assets"

function Feature() {
    return (
        <div className="px-10 flex flex-col gap-10 items-start">
            <h1 className="font-semibold text-5xl sm:leading-17 sm:text-6xl">ToDesktop handles the details</h1>
            <div className="lg:grid grid-cols-3 auto-rows-[96px] gap-5">
                <FeatureCard
                    title={"Native Notification"}
                    description={""}
                    image={assets.asset37}
                    dimen={[[1, 3], [1, 2]]}
                />
                <FeatureCard
                    title={"Native Notification"}
                    description={"We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."}
                    image={assets.asset38}
                    dimen={[[1, 4], [2, 3]]}
                />
                <FeatureCard
                    title={"Native Notification"}
                    description={""}
                    image={assets.asset39}
                    dimen={[[1, 3], [3, 4]]}
                />
                <FeatureCard
                    title={"Native Notification"}
                    description={"We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."}
                    image={assets.asset40}
                    dimen={[[3, 6], [1, 2]]}
                />
                <FeatureCard
                    title={"Native Notification"}
                    description={""}
                    image={assets.asset37}
                    dimen={[[4, 6], [2, 3]]}
                />
                <FeatureCard
                    title={"Native Notification"}
                    description={"We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features."}
                    image={assets.asset38}
                    dimen={[[3, 6], [3, 4]]}
                />
            </div>
        </div >
    )
}

export default Feature