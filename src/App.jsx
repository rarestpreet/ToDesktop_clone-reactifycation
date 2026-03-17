import NavBar from "./components/layout/NavBar"
import Hero from "./components/layout/Hero"
import AppContextProvider from "./context/AppContextProvider"
import Guide from "./components/layout/Guide"
import Feature from "./components/layout/Feature"
import Review from "./components/layout/Review.jsx"
import Pricing from "./components/layout/Pricing.jsx"
import Queries from "./components/layout/Queries.jsx"
import Footer from "./components/layout/Footer.jsx"

function App() {

    return (
        <>
            <AppContextProvider>
                <NavBar />
                <Hero />
                <div className="flex flex-col gap-15 px-7">
                    <Guide />
                    <Feature />
                    <Review />
                    <Pricing />
                    <Queries />
                    <Footer />
                </div>
            </AppContextProvider>
        </>
    )
}

export default App
