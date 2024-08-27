import { Outlet } from "react-router-dom"
import Footer from "./components/app/footer/Footer"
import Navbar from "./components/app/navbar/Navbar"
import ThemeProvider from "./themeProvider/ThemeProvider"

function App() {

  return (
    <>
      {/* navbar */}
      <Navbar />
      <div className="lg:w-[90%] w-[95%] mx-auto">


        {/* outlet */}
        <Outlet />

      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default App
