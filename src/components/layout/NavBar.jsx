import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import useAppContext from "../../context/appContext"

function NavBar() {
    const { isMobile } = useAppContext()

    return (
        <nav className="fixed top-0 left-0 right-0 z-10">
            {isMobile ?
                <MobileNav />
                : <DesktopNav />
            }
        </nav>
    )
}

export default NavBar