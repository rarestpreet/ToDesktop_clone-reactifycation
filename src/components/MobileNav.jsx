import BrandContainer from "../elements/BrandContainer"
import NavLinks from "../elements/NavLinks"
import NavCTA from "../elements/NavCTA"
import { useState } from "react"

function MobileNav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative">
            <div id="default-nav" className="top-0 left-0 right-0 fixed z-10 box-border">
                {/* Top bar: brand + hamburger */}
                <div className="flex items-center justify-between py-2 px-4 box-border bg-white shadow-lg shadow-neutral-200">
                    <BrandContainer />
                    {isMenuOpen ?
                        <button id="menu-btn" className="" onClick={() => setIsMenuOpen(false)}>
                            <span><i id="menu-icon" className="fa-solid fa-xmark fa-lg"></i></span>
                        </button> :
                        <button id="menu-btn" className="" onClick={() => setIsMenuOpen(true)}>
                            <span><i id="menu-icon" className="fa-solid fa-bars fa-lg"></i></span>
                        </button>
                    }
                </div>
            </div>
            {/* Collapsible dropdown — full screen below top bar */}
            {isMenuOpen &&
                <div id="hidden-nav" className="fixed inset-x-0 top-[56px] bottom-0 z-10 flex flex-col py-2 px-3 gap-4 bg-white overflow-y-auto">
                    <div id="hidden-nav-menu" className="flex flex-col items-start gap-2 font-medium">
                        <NavLinks linkClass="p-3 w-full border border-none rounded-md hover:bg-gray-50" />
                    </div>
                    <div className="w-full h-px rounded-md bg-gray-400"></div>
                    <NavCTA className="p-3 w-full border border-none rounded-md hover:bg-gray-50 text-lg" />
                </div>
            }
        </div>
    )
}

export default MobileNav
