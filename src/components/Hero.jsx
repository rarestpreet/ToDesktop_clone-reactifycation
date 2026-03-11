import CompanyScroller from "./CompanyScroller"

function Hero() {
    return (
        <div id="hero" className="items-stretch pt-24 flex flex-col gap-8 bg-linear-to-b from-purple-50 via-orange-50 to-transparent">

            {/* Main hero content */}
            <div id="hero-container" className="self-center flex flex-col items-center gap-11 p-4 md:w-2xl">

                {/* Announcement badge */}
                <button className="py-1 px-3 border border-yellow-300 rounded-lg flex gap-3 items-center justify-center bg-yellow-50 shadow-lg shadow-dark-100 hover:-translate-y-1 transition group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                    <span className="text-sm md:text-base text-yellow-600 font-medium">v0.21.1:</span>
                    <span className="md:text-lg text-yellow-800 font-medium">Find-in-page bug fixes</span>
                    <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 duration-300"></i>
                </button>

                {/* Feature tags */}
                <div className="hidden sm:flex justify-center gap-10 md:text-lg text-gray-400">
                    <span className="flex gap-2 items-center">
                        <i className="fa-regular fa-file-code"></i> Code Optional
                    </span>
                    <span className="flex gap-2 items-center">
                        <i className="fa-solid fa-hand-fist"></i> Drag &amp; drop builder
                    </span>
                    <span className="flex gap-2 items-center">
                        <i className="fa-solid fa-laptop"></i> Windows, Mac, Linux
                    </span>
                </div>

                {/* Heading */}
                <span className="font-semibold text-5xl sm:leading-17 sm:text-center sm:text-6xl">
                    Web app to desktop app in minutes
                </span>

                {/* Subheading */}
                <span className="text-lg sm:text-2xl sm:text-center leading-snug">
                    Take your web app codebase and transform it into a cross platform desktop app with native functionality.
                </span>

                {/* CTA buttons */}
                <div className="flex justify-center gap-10 md:text-xl">
                    <button className="py-2 px-3 rounded-lg bg-blue-700 text-white">
                        Download Now
                    </button>
                    <button className="py-2 px-3 border rounded-lg bg-white text-black">
                        Read Docs
                    </button>
                </div>
            </div>

            {/* Company logo scroller */}
            <CompanyScroller />
        </div>
    )
}

export default Hero
