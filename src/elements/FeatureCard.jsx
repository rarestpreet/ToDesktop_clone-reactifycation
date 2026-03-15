function FeatureCard({ title, description, image, dimen }) {
    return (
        <div
            className="flex flex-col items-center gap-5 border p-5 rounded-2xl border-gray-200 bg-gray-50 justify-between overflow-hidden
      hover:bg-linear-to-b from-purple-50 to-orange-50"
            style={{
                gridRowStart: dimen[0][0],
                gridRowEnd: dimen[0][1],
                gridColumnStart: dimen[1][0],
                gridColumnEnd: dimen[1][1],
            }}
        >
            <span className="font-medium text-xl">{title}</span>
            <span className="text-center">{description}</span>
            <img src={image} className="w-60" alt="" />
        </div>
    );
}

export default FeatureCard