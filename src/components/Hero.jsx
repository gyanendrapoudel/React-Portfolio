import profile from '../assets/images/gyan.png'
const Hero = () => {
  return (
    <>
    <section class="about-me pad-maker" id="about-me">
      <p class="name-text">
        <span style={{ fontSize: '12px' }}>Hi I am </span>Gyanendra Poudel
      </p>
      <div class="">Soft. Engineer</div>
      <p>
        I love coding. <br />I am Passionate coder proficient in multiple
        languages, <br />
        adept at problem-solving and <br />
        turning ideas into functional software solutions.{' '}
      </p>
      <a href={profile} download>
        <button class="btn">
          Download CV <i class="fa-solid fa-download"></i>
        </button>
      </a>
      <div class="about-me-img">
        <img src={profile} alt="" />
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
       </>
  )
}
export default Hero
