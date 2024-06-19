import project from '../assets/images/project.png'
const Project = ({webLink, gitLink, projectTitle, techStack, name}) => {
  return (
    <div className={name}>
      <div className="img-container">
        <img className="profile-pic" src={project} alt="profile pic" />
      </div>
      <div className="project-links display-flex-center">
        <a href={webLink}>
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href={gitLink}
          target="_blank"
        >
          <i className="fa-brands fa-chrome"></i>
        </a>
      </div>
      <div className="skill-links"></div>
      <div className="project-description">
        <h3>{projectTitle}</h3>
        <p>{techStack}</p>
      </div>
    </div>
  )
}
export default Project
