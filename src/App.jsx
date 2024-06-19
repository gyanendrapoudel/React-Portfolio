import { useState } from 'react'
import profile from "./assets/images/gyan.png"
import project from "./assets/images/project.png"
import './App.css'

function App() {
  return (
      <>
      <input type="checkbox" id="darkMode"/>
    <div className="wrapper">
    <label htmlFor="darkMode"><i className="fa-solid fa-circle-half-stroke"></i></label>
        <header id="header">
            <div className=" pad-maker heading  display-flex">
            <div className=" left-section display-flex">
                <p>Gyanendra</p>
                <p className="bar">|</p>
                <p className="Soft">Soft. Engineer</p>
                
            </div>
            <div className="right-section display-flex">
                <a href="#about-me" className="link1">Home</a>
                <a href="#skill" className="link2">Skills</a>
                <a href="#project" className="link3">Project</a>
                <a href="#profile" className="link4">About</a>
                <a href="#contact" className="link5">Contact</a>
            </div>
            <div className="hamburger">
                <label htmlFor="hamburger"> <i className="fa-solid fa-bars"></i></label>

                <input type="checkbox" id="hamburger"/>
                <ul className="hamburger-menu display-flex-center">
                    <li><a href="#about-me"  className="link1">Home</a></li>
                    <li><a href="#skill" className="link2">Skills</a></li>
                    <li> <a href="#project" className="link3">Project</a></li>
                    <li> <a href="#profile" className="link4">About Me</a></li>
                    <li><a href="#contact" className="link5">Contact</a></li>
                </ul>
               
            </div>

            </div>
        </header>
        
         <section class="about-me pad-maker" id="about-me">
            <p class="name-text"><span style={{fontSize: "12px"}}>Hi I am </span>Gyanendra Poudel</p>
            <div class="">Soft. Engineer</div>
            <p>I love coding. <br/>I am Passionate coder proficient in multiple languages, <br/>adept at problem-solving and <br/>turning ideas into functional software solutions. </p>
            <a href={profile} download>
            <button class="btn">Download CV <i class="fa-solid fa-download"></i></button>

            </a>
            <div class="about-me-img">
                <img src={profile} alt=""/>
            </div>
        </section>
        <section class="pad-maker experiece display-flex">
            <div class="display-flex">
                <div class="icon" >
                  <a href=""> <i class="fa-solid fa-graduation-cap"></i></a>
                </div>
                <div >
                    <h4>Master in Software Engineer</h4>
                    <p>Graduation</p>
                </div>
            </div>
            <div class="line-separator"></div>

            <div class="display-flex">
                <div class="icon">
                    <a href=""> <i class="fa-solid fa-book-open"></i></a>

                </div>
                <div>
                    <h4>5+ Projects Completed</h4>
                    <p>Projects</p>
                </div>
            </div>
            <div class="line-separator"></div>

            <div class="display-flex">
                <div class="icon">
                    <a href=""><i class="fa-solid fa-terminal"></i></a>
                </div>
                <div>
                    <h4>1+ year Experience</h4>
                    <p>Experience</p>
                </div>
            </div>

        </section>
       
        {/* <!-- skills --> */}
        <section className="skill  pad-maker " id="skill">
           <div className=" display-flex skill-text">
            <span>Skills</span>
           </div>
           <div className="skill-set display-flex">
            <div className="item1 gird">
                <div className="icon" style={{color: "orangered"}}>
                <i className="fa-brands fa-html5"></i>

                </div>
                <span>HTML</span>
            </div>
            <div className="item2 gird">
                <div className="icon">
                <i className="fa-brands fa-css3-alt"></i>

                </div>
                <span>CSS</span>
            </div>
            <div className="item3 gird">
                <div className="icon" style={{color:"rgb(237, 237, 42)"}}>
                <i className="fa-brands fa-js"></i>

                </div>
                <span>JavaScript</span>
            </div>
            <div className="item4 gird">
                <div className="icon">
                <i className="fa-brands fa-github"></i>

                </div>
                  <span>Github</span>
            </div>
            <div className="item5 gird">
                <div className="icon">
                <i className="fa-brands fa-node-js"></i>

                </div>
                  <span>NodeJS</span>
            </div>
            <div className="item5 gird">
                 <div className="icon" style={{color: "rgb(234, 149, 163)"}}>
                    <i className="fa-brands fa-figma"></i>
                    </div>

                  <span>Figma</span>
            </div>
           </div>
            

        </section>
         {/* <!-- hero --> */}
        <section className="hero pad-maker" id="project">
            <h4>my Project</h4>
            <div className="projects">
              
                <div className="project1">
                   <div className="img-container"  >
                        <img  className="profile-pic" src={project} alt="profile pic" />
                   </div>
                   <div className="project-links display-flex-center">
                        <a href="https://github.com/gyanendrapoudel/jobster"><i className="fa-brands fa-github"></i></a>
                        <a href="https://redux-toolkit-jobster.netlify.app/landing" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                   </div>
                   <div className="skill-links"></div>
                   <div className="project-description">
                    <h3>Jobster Development</h3>
                    <p>TechStack: React, Redux, thunkAPI</p>
                   </div>
                </div>
                <div className="project2">
                   <div className="img-container"  >
                        <img  className="profile-pic" src={project} alt="profile pic" />
                   </div>
                   <div className="project-links display-flex-center">
                        <a href="https://github.com/gyanendrapoudel/tours"><i className="fa-brands fa-github"></i></a>
                        <a href="https://gyanendrapoudel.netlify.app/" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                   </div>
                   <div className="skill-links"></div>
                   <div className="project-description">
                    <h3>Tour Blog</h3>
                    <p>TechStack: React, CSS </p>
                   </div>
                </div>
                <div className="project3">
                   <div className="img-container"  >
                        <img  className="profile-pic" src={project} alt="profile pic" />
                   </div>
                   <div className="project-links display-flex-center">
                        <a href="https://github.com/gyanendrapoudel/YouTubeClone"><i className="fa-brands fa-github"></i></a>
                        <a href="https://gyanendrapoudel.github.io/YouTubeClone/" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                   </div>
                   <div className="skill-links"></div>
                   <div className="project-description">
                    <h3>YouTube Clone</h3>
                    <p>TechStack: HTML, CSS</p>
                   </div>
                </div>
                <div className="project4">
                   <div className="img-container"  >
                        <img  className="profile-pic" src={project} alt="profile pic" />
                   </div>
                   <div className="project-links display-flex-center">
                        <a href="https://github.com/gyanendrapoudel/Parallex"><i className="fa-brands fa-github"></i></a>
                        <a href="https://gyanendrapoudel.github.io/Parallex/" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                   </div>
                   <div className="skill-links"></div>
                   <div className="project-description">
                    <h3>Parallax Effect Project</h3>
                    <p>TechStack: HTML, CSS</p>
                   </div>
                </div>
                
                
                
            </div>
      
        </section>

        {/* <!-- Profile Section --> */}
        <section className="profile" id="profile"> 
            <div className=" pad-maker profile-text">About Me</div>
            <div className="profile-content display-flex">
                <div className="img">
                    <img src={profile} alt=""/>
                </div>
                <div className="profile-content-text ">
                    <div className="name">Gyanendra Poudel</div>
                    <div className="">
                        A skilled Frontend Developer proficient in HTML, CSS, and JavaScript
                        seeking a challenging position in the IT industry.
                        Dedicated to creating responsive and visually appealing web applications,
                        with a keen interest in staying updated with emerging technologies
                        and industry trends. Eager to contribute to innovative projects and 
                        collaborate within a dynamic team environment.
                        <p>Sydney, Australia</p>
                    </div>
                    <div className="interest">
                        <div className="interest-text ">Interest</div>
                        <div className="display-flex">
                            <span>Coding</span>
                            <span>Football</span>
                            <span>Cricket</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* <!-- contact me --> */}
        <section className="contact pad-maker" id="contact">
            <h2>Contact Me</h2>
            <div className="contact-links display-flex-center">
                <div className="contact-links1">
                    <a href="https://www.linkedin.com/in/gyanendra-p-015a90182/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div className="contact-links2">
                     <a href="">
                       <i className="fa-solid fa-phone"></i>
                    </a>
                </div>
                 
                <div className="contact-links3">
                     <a href="https://github.com/gyanendrapoudel/">
                       <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                
            </div>
            <h3>OR</h3>
            <div className="email-link display-flex-center">
                
                <span>gyanen56@gmail.com</span>
                <a href={{mailto:"gyanen56@gmail.com"}}><i className="fa-solid fa-paper-plane"></i></a>
                
            </div>
        </section>

        {/* <!-- footer --> */}
        <section className="footer ">
            <div className=" footer-content pad-maker display-flex-center">
                <div className="footer-left-section">
                    <span>links</span> 
                    <li><a href="#header">Home</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#profile">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
                
                <div className="footer-right-section">
                    <span>social links</span>
                    <li><a href="https://github.com/gyanendrapoudel/">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/gyanendra-p-015a90182/">Linkedin</a></li>
                    
            </div>

            </div>
            <div className= "display-flex-center">
                &copy; Copy right all reserved 2024 || made by me with 🚀
            </div>

        </section>

        {/* <!-- page navigation icon --> */}
        <a href="#about-me" className="go-up"><i className="fa-solid fa-chevron-up"></i></a>


    </div>
      </>
  
)
}

export default App
