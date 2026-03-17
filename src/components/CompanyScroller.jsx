import assets from "../util/assets"
import LogoCard from "../elements/LogoCard"
import useAppContext from "../context/appContext"
import { row1 } from "../util/constant"

function ScrollRow({ logos, direction }) {
    const animationClass = direction === 'reverse' ? 'animate-scroll-reverse' : 'animate-scroll';

    return (
        <div className={`flex w-max ${animationClass}`}>
            <div className="flex gap-5 pr-5 w-max">
                {logos.map((logo, i) => (
                    <LogoCard key={`${logo.name}-${i}-1`} src={logo.src} name={logo.name} />
                ))}
            </div>
            <div className="flex gap-5 pr-5 w-max">
                {logos.map((logo, i) => (
                    <LogoCard key={`${logo.name}-${i}-2`} src={logo.src} name={logo.name} />
                ))}
            </div>
        </div>
    )
}

function CompanyScroller() {
    const { isMobile } = useAppContext()

    return (
        <div id="company-container" className="flex flex-col gap-8">
            <div className="flex justify-center gap-2 items-center text-sm text-gray-500 font-medium">
                <img className="translate-y-0.5" src={assets.asset2} alt="" />
                APPS POWERED BY TODESKTOP
                <img className="translate-y-0.5 -scale-x-100" src={assets.asset2} alt="" />
            </div>
            <div className="text-sm flex flex-col gap-7 sm:text-base overflow-hidden">
                <ScrollRow logos={row1} direction="reverse" />
                <ScrollRow logos={row1} direction="normal" />
                {isMobile &&
                    <ScrollRow logos={row1} direction="reverse" />
                }
            </div>
        </div>
    )
}

export default CompanyScroller
