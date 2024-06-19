const Skills = () => {
  return (
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
  )
}
export default Skills