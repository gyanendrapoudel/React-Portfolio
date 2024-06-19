const Contact = () => {
  return (
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
        <a href={{ mailto: 'gyanen56@gmail.com' }}>
          <i className="fa-solid fa-paper-plane"></i>
        </a>
      </div>
    </section>
  )
}
export default Contact