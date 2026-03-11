import { AppContext } from "./appContext"
import { useEffect, useState } from "react"

function AppContextProvider({ children }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <AppContext.Provider value={{ isMobile, setIsMobile }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider