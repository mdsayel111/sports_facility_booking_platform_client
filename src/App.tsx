import { FloatButton } from "antd"
import { FaArrowUp } from "react-icons/fa"
import { Outlet } from "react-router-dom"
import Footer from "./components/app/footer/Footer"
import Navbar from "./components/app/navbar/Navbar"

function App() {

  // scroll top handler
  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      {/* navbar */}
      <Navbar />
      <div className="lg:w-[90%] w-[95%] mx-auto">


        {/* outlet */}
        <Outlet />

      </div>

      <FloatButton
        onClick={scrollHandler}
        shape="square"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<FaArrowUp />}
      />

      {/* footer */}
      <Footer />
    </>
  )
}

export default App
