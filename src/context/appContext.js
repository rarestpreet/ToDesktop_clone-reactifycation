import { createContext, useContext } from "react"

export const AppContext = createContext({
    isMobile: false,
    setIsMobile: () => { },
})

const useAppContext = () => {
    return useContext(AppContext)
}

export default useAppContext