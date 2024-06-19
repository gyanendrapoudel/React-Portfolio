import project from '../assets/images/project.png'
import Project from './Project'
import Title from './Title'
const details = [
  {
    webLink: 'https://github.com/gyanendrapoudel/jobster',
    gitLink: 'https://redux-toolkit-jobster.netlify.app/landing',
    projectTitle: 'Jobster Development',
    techStack: 'TechStack: React, Redux, thunkAP',
    name: 'project1',
  },
  {
    webLink: 'https://gyanendrapoudel.netlify.app/',
    gitLink: 'https://github.com/gyanendrapoudel/tours',
    projectTitle: 'Tour Blog',
    techStack: 'TechStack: React, CSS',
    name: 'project2',
  },
  { webLink:'https://gyanendrapoudel.github.io/YouTubeClone/',
    gitLink:'https://github.com/gyanendrapoudel/YouTubeClone',
    projectTitle:'YouTube Clone',
    techStack:'TechStack: HTML, CSS',
    name:'project3'
  },
  {
     webLink:'https://github.com/gyanendrapoudel/Parallex',
          gitLink:'https://gyanendrapoudel.github.io/Parallex/',
          projectTitle:'Parallax Effect Project',
          techStack:'TechStack: HTML, CSS',
          name:'project4',
  }
] 
const Projects = () => {
  return (
    <section className="hero pad-maker" id="project">
      <h4>my Project</h4>
      <div className="projects">
        {details.map((detail,index)=>{
            return <Project key={index} {...detail}/>
        })}
        
      </div>
    </section>
  )
}
export default Projects
