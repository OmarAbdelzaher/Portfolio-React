import React  from "react";
import "./about.css";

class About extends React.Component {
    constructor(){
        super();
    }

    render(){
       return (
        <>
            <div className="about">
                <div className="about-heading">
                    <h2>About me</h2>
                </div>
                <div className="about-para">
                    <p>I am a fresh graduate from Systems and Biomedical Engineering department - Cairo university.
                        I am looking for a job opportunity as a full stack developer, I worked on my graduation project using Ionic VueJs and Django frameworks.
                    </p>
                    <a href='https://drive.google.com/uc?export=download&id=18VHXxnxjMbSo0UhxbpNYwSp-ZXnmnMUv' download={"OmarAbdelzaher-Resume"}><button className="btn btn-secondary down" type="button">Download Resume</button></a>
                </div>
            </div>
        </>
       );
    }
}

export default About;