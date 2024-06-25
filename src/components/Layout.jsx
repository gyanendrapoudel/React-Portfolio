import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
const Layout = () => {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar />
        <div style={{minHeight:"70vh"}}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default Layout