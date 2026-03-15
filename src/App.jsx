import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AppContextProvider from "./context/AppContextProvider"
import Guide from "./components/Guide"
import Feature from "./components/Feature"

function App() {

  return (
    <>
      <AppContextProvider>
        <NavBar />
        <div className="flex flex-col gap-15">
          <Hero />
          <Guide />
          <Feature />
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
