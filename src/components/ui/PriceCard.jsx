function PriceCard({ tier, price, info, alert }) {
    return (
        <div className="flex flex-col gap-7 bg-gray-50 border border-gray-300 rounded-2xl p-7">
            <span className="text-4xl font-medium">{tier}</span>
            <span className="text-lg">{info}</span>
            <span className="text-3xl font-medium">${price}/month</span>
            <span className="text-xl">KEY FEATURES</span>
            <div className="text-lg flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <i class="fa-solid fa-check"></i>
                    <span>Free for personal use</span>
                </div>
                <div className="flex gap-3 items-center">
                    <i class="fa-solid fa-check"></i>
                    <span>Free for personal use</span>
                </div>
                <div className="flex gap-4 items-center">
                    <i class="fa-solid fa-xmark"></i>
                    <span>Free for personal use</span>
                </div>
                <div className="flex gap-4 items-center">
                    <i class="fa-solid fa-xmark"></i>
                    <span>Free for personal use</span>
                </div>
            </div>

            <button className="p-3 border-gray-300 text-blue-600 font-medium rounded-lg border
            cursor-pointer duration-300 hover:bg-blue-600 hover:text-white">
                Read Docs
            </button>
        </div>
    )
}

export default PriceCard