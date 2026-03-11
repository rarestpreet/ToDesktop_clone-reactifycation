import BrandContainer from "../elements/BrandContainer"
import NavLinks from "../elements/NavLinks"
import NavCTA from "../elements/NavCTA"

function DesktopNav() {
    return (
        <div className="items-center justify-between py-4 px-5 box-border lg:flex bg-white shadow-lg shadow-neutral-200">
            <BrandContainer />
            <div className="items-center gap-7 flex font-medium text-lg">
                <NavLinks linkClass="hover:text-blue-600" />
            </div>
            <NavCTA className="border rounded-md border-solid border-gray-500 hover:border-black py-2 px-3 font-medium text-base" />
        </div>
    )
}

export default DesktopNav
