import assets from "../util/assets"

function NavCTA({ className }) {
    return (
        <button className={`flex items-center gap-3 ${className}`}>
            <img src={assets.asset1} />
            <span>Electron Developers</span>
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 duration-300"></i>
        </button>
    )
}

export default NavCTA
