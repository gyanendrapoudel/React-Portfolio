const Navbar = () => {
  return (
    <header id="header">
      <div className=" pad-maker heading  display-flex">
        <div className=" left-section display-flex">
          <p>Gyanendra</p>
          <p className="bar">|</p>
          <p className="Soft">Soft. Engineer</p>
        </div>
        <div className="right-section display-flex">
          <a href="#about-me" className="link1">
            Home
          </a>
          <a href="#skill" className="link2">
            Skills
          </a>
          <a href="#project" className="link3">
            Project
          </a>
          <a href="#profile" className="link4">
            About
          </a>
          <a href="#contact" className="link5">
            Contact
          </a>
        </div>
        <div className="hamburger">
          <label htmlFor="hamburger">
            {' '}
            <i className="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburger" />
          <ul className="hamburger-menu display-flex-center">
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