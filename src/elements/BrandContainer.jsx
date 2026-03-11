import { Link } from "react-router"
import assets from "../util/assets"

function BrandContainer() {

    return (
        <>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="brand flex items-center gap-1">
                <img src={assets.asset0} alt="logo" className="w-10" />
                <span className="text-lg font-medium">ToDesktop</span>
            </Link>
        </>
    )
}

export default BrandContainer