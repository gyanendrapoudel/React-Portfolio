import profile from '../assets/images/gyan.png'
const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className=" pad-maker profile-text">About Me</div>
      <div className="profile-content display-flex">
        <div className="img">
          <img src={profile} alt="" />
        </div>
        <div className="profile-content-text ">
          <div className="name">Gyanendra Poudel</div>
          <div className="">
            A skilled Frontend Developer proficient in HTML, CSS, and JavaScript
            seeking a challenging position in the IT industry. Dedicated to
            creating responsive and visually appealing web applications, with a
            keen interest in staying updated with emerging technologies and
            industry trends. Eager to contribute to innovative projects and
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
  )
}
export default Profile
