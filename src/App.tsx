import { Outlet } from "react-router-dom"
import Footer from "./components/mainLayout/footer/Footer"
import Navbar from "./components/mainLayout/navbar/Navbar"
import ThemeProvider from "./themeProvider/ThemeProvider"

function App() {

  return (
    <>
      <ThemeProvider colorPrimary="#FD1E50" colorBgContainer="#ffff">
        {/* navbar */}
        <Navbar />
        <div className="lg:w-[90%] w-[95%] mx-auto">


          {/* outlet */}
          <Outlet />

          {/* footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
