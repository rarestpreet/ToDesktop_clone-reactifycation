import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AppContextProvider from "./context/AppContextProvider"


function App() {

  return (
    <>
      <AppContextProvider>
        <NavBar />
        <Hero />
      </AppContextProvider>
    </>
  )
}

export default App
