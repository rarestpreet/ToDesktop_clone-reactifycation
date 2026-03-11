import { Link } from "react-router"

const links = [
    { to: "/pricing", title: "Pricing" },
    { to: "/docs", title: "Docs" },
    { to: "/changelog", title: "Changelog" },
    { to: "/blogs", title: "Blogs" },
    { to: "/login", title: "Login" },
]

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
