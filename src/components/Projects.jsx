import project from '../assets/images/project.png'
import Project from './Project'
import Title from './Title'
const Projects = () => {
  return (
    <section className="hero pad-maker" id="project">
      <h4>my Project</h4>
      <div className="projects">
        <Project
          webLink={'https://github.com/gyanendrapoudel/jobster'}
          gitLink={'https://redux-toolkit-jobster.netlify.app/landing'}
          projectTitle={'Jobster Development'}
          techStack={'TechStack: React, Redux, thunkAP'}
          name={'project1'}
        />

        <Project
          webLink={'https://gyanendrapoudel.netlify.app/'}
          gitLink={'https://github.com/gyanendrapoudel/tours'}
          projectTitle={'Tour Blog'}
          techStack={'TechStack: React, CSS'}
          name={'project2'}
        />

        <Project
          webLink={'https://gyanendrapoudel.github.io/YouTubeClone/'}
          gitLink={'https://github.com/gyanendrapoudel/YouTubeClone'}
          projectTitle={'YouTube Clone'}
          techStack={'TechStack: HTML, CSS'}
          name={'project3'}
        />
        <Project
          webLink={'https://github.com/gyanendrapoudel/Parallex'}
          gitLink={'https://gyanendrapoudel.github.io/Parallex/'}
          projectTitle={'Parallax Effect Project'}
          techStack={'TechStack: HTML, CSS'}
          name={'project4'}
        />

        
      </div>
    </section>
  )
}
export default Projects
