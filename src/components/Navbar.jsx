import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header id="header">
      <div className=" pad-maker heading  display-flex">
        <div className=" left-section display-flex">
          <p>Gyanendra</p>
          <p className="bar">|</p>
          <p className="Soft">Soft. Engineer</p>
        </div>
        <div className="right-section display-flex">
          <Link to="/" className="link1">
            Home
          </Link>
          <Link to="/skills" className="link2">
            Skills
          </Link>
          <Link to="/projects" className="link3">
            Project
          </Link>
          <Link to="/profile" className="link4">
            About
          </Link>
          <Link to="/contact" className="link5">
            Contact
          </Link>
        </div>
        <div className="hamburger">
          <label htmlFor="hamburger" onClick={()=>setShowMenu(!showMenu)}>
            {' '}
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburger" />
          <ul className={showMenu?"hamburger-menu slide display-flex-center":"hamburger-menu  display-flex-center"}
          onClick={()=>setShowMenu(!showMenu)}>
            <li>
              <a href="#about-me" className="link1">
                Home
              </a>
            </li>
            <li>
              <a href="#skill" className="link2">
                Skills
              </a>
            </li>
            <li>
              {' '}
              <a href="#project" className="link3">
                Project
              </a>
            </li>
            <li>
              {' '}
              <a href="#profile" className="link4">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="link5">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Navbar