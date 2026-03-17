import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AppContextProvider from "./context/AppContextProvider"
import Guide from "./components/Guide"
import Feature from "./components/Feature"
import Review from "./components/Review.jsx"
import Pricing from "./components/Pricing.jsx"
import Queries from "./components/Queries.jsx"
import Footer from "./components/Footer.jsx"

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
