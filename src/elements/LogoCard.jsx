function LogoCard({ src, name }) {
    return (
        <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
            <img src={src} className="w-12 h-12 md:w-16 md:h-16" alt={name} />
            <span className="text-[12px] font-semibold lg:text-[16px]">{name}</span>
        </div>
    )
}

export default LogoCard
