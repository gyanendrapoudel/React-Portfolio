import project from '../assets/images/project.png'
const Projects = () => {
  return (
    <section className="hero pad-maker" id="project">
      <h4>my Project</h4>
      <div className="projects">
        <div className="project1">
          <div className="img-container">
            <img className="profile-pic" src={project} alt="profile pic" />
          </div>
          <div className="project-links display-flex-center">
            <a href="https://github.com/gyanendrapoudel/jobster">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://redux-toolkit-jobster.netlify.app/landing"
              target="_blank"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <div className="skill-links"></div>
          <div className="project-description">
            <h3>Jobster Development</h3>
            <p>TechStack: React, Redux, thunkAPI</p>
          </div>
        </div>
        <div className="project2">
          <div className="img-container">
            <img className="profile-pic" src={project} alt="profile pic" />
          </div>
          <div className="project-links display-flex-center">
            <a href="https://github.com/gyanendrapoudel/tours">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://gyanendrapoudel.netlify.app/" target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <div className="skill-links"></div>
          <div className="project-description">
            <h3>Tour Blog</h3>
            <p>TechStack: React, CSS </p>
          </div>
        </div>
        <div className="project3">
          <div className="img-container">
            <img className="profile-pic" src={project} alt="profile pic" />
          </div>
          <div className="project-links display-flex-center">
            <a href="https://github.com/gyanendrapoudel/YouTubeClone">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://gyanendrapoudel.github.io/YouTubeClone/"
              target="_blank"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <div className="skill-links"></div>
          <div className="project-description">
            <h3>YouTube Clone</h3>
            <p>TechStack: HTML, CSS</p>
          </div>
        </div>
        <div className="project4">
          <div className="img-container">
            <img className="profile-pic" src={project} alt="profile pic" />
          </div>
          <div className="project-links display-flex-center">
            <a href="https://github.com/gyanendrapoudel/Parallex">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://gyanendrapoudel.github.io/Parallex/"
              target="_blank"
            >
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <div className="skill-links"></div>
          <div className="project-description">
            <h3>Parallax Effect Project</h3>
            <p>TechStack: HTML, CSS</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
