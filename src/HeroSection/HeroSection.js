import React  from "react";
import "./HeroSection.css";

class Hero extends React.Component {
    constructor(){
        super();
    }

    render(){
       return (
        <>
        <div className="text-secondary text-center heroDiv">
            <div className="py-5">
            <h1 className="display-5 fw-bold text-white">Welcome to my Portfolio</h1>
            <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4">This website is created using React library by implementing multiple components to introduce a user portoflio where you can find about me, skills, portfolio, and contact sections.</p>
                <div className="d-grid gap-2 justify-content-sm-center">
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Contact Me</button>
                </div>
            </div>
            </div>
        </div>
        </>
       );
    }
}

export default Hero;