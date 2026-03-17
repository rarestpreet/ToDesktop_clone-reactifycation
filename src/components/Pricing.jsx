import PriceCard from "../elements/PriceCard"

function Pricing() {
    return (
        <div className="pricing flex flex-col gap-10 ">
            <span className="font-semibold text-5xl sm:leading-17 sm:text-6xl">
                Choose a plan that fits your needs
            </span>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <PriceCard tier="Free" price="0" info="For personal use or testing." alert={false} />
                <PriceCard tier="Essential" price="99" info="For simple desktop apps." alert={false} />
                <PriceCard tier="Professional" price="149" info="For sophisticated desktop apps." alert={true} />
            </div>
        </div>
    )
}

export default Pricing