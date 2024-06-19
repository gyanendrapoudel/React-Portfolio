import profile from '../assets/images/gyan.png'
const Hero = () => {
  return (
    <>
    <section className="about-me pad-maker" id="about-me">
      <p className="name-text">
        <span style={{ fontSize: '12px' }}>Hi I am </span>Gyanendra Poudel
      </p>
      <div className="">Soft. Engineer</div>
      <p>
        I love coding. <br />I am Passionate coder proficient in multiple
        languages, <br />
        adept at problem-solving and <br />
        turning ideas into functional software solutions.{' '}
      </p>
      <a href={profile} download>
        <button className="btn">
          Download CV <i className="fa-solid fa-download"></i>
        </button>
      </a>
      <div className="about-me-img">
        <img src={profile} alt="" />
      </div>
    </section>
     <section className="pad-maker experiece display-flex">
            <div className="display-flex">
                <div className="icon" >
                  <a href=""> <i className="fa-solid fa-graduation-cap"></i></a>
                </div>
                <div >
                    <h4>Master in Software Engineer</h4>
                    <p>Graduation</p>
                </div>
            </div>
            <div className="line-separator"></div>

            <div className="display-flex">
                <div className="icon">
                    <a href=""> <i className="fa-solid fa-book-open"></i></a>

                </div>
                <div>
                    <h4>5+ Projects Completed</h4>
                    <p>Projects</p>
                </div>
            </div>
            <div className="line-separator"></div>

            <div className="display-flex">
                <div className="icon">
                    <a href=""><i className="fa-solid fa-terminal"></i></a>
                </div>
                <div>
                    <h4>1+ year Experience</h4>
                    <p>Experience</p>
                </div>
            </div>

        </section>
       </>
  )
}
export default Hero
