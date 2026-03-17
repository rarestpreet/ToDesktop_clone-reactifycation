import { Link } from "react-router"

import { getNavLinks } from "../../services/navService"

const links = getNavLinks();

function NavLinks({ linkClass }) {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.title}
                    to={link.to}
                    className={linkClass}
                >
                    {link.title}
                </Link>
            ))}
        </>
    )
}

export default NavLinks
