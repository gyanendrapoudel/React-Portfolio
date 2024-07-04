import { useEffect, useState } from "react"

const Footer = () => {
  const [upIcon, setUpIcon] = useState(0)
  const handleScroll=()=>{
    console.log(window.scrollY)
    setUpIcon(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  return (
    <>
      <section className="footer ">
        <div className=" footer-content pad-maker display-flex-center">
          <div className="footer-left-section">
            <span>links</span>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#profile">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>

          <div className="footer-right-section">
            <span>social links</span>
            <li>
              <a href="https://github.com/gyanendrapoudel/">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gyanendra-p-015a90182/">
                Linkedin
              </a>
            </li>
          </div>
        </div>
        <div className="display-flex-center">
          &copy; Copy right all reserved 2024 || made by me with 🚀
        </div>
      </section>
      {/* <!-- page navigation icon --> */}
      {upIcon > 700 && (
        <a href="#about-me" className="go-up">
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      )}
    </>
  )
}
export default Footer