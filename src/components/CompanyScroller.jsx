import assets from "../util/assets"
import LogoCard from "../elements/LogoCard"
import useAppContext from "../context/appContext"
import { row1 } from "../util/constant"

function ScrollRow({ logos, translateClass }) {
    return (
        <div className={`flex gap-5 w-max ${translateClass}`}>
            {logos.map((logo, i) => (
                <LogoCard key={`${logo.name}-${i}`} src={logo.src} name={logo.name} />
            ))}
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
                <ScrollRow logos={row1} translateClass="-translate-x-10" />
                <ScrollRow logos={row1} translateClass="-translate-x-20" />
                {isMobile &&
                    <ScrollRow logos={row1} translateClass="-translate-x-10" />
                }
            </div>
        </div>
    )
}

export default CompanyScroller
