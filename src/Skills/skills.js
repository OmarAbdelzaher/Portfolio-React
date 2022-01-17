import React from "react";
import "./skills.css";
import Progressbar from "./ProgressBar";
import Labels from "./labels";

class Skills extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="bg-dark skills">
                    <div className="skills-heading">
                        <h2 className="pt-5">Skills</h2>
                    </div>
                    <div className="skills-para m-5">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="progress-focus">
                        <div className="my-focus">
                            <div className="My">
                                <p >MY FOCUS</p>
                            </div>
                            {/* <hr></hr> */}
                            <p>UI/UX Design</p>
                            <p>Responsive Design</p>
                            <p>Web Design</p>
                            <p>Mobile App Design</p>
                        </div>
                        <div className="lab">
                            <Labels list={["HTML","CSS","JS","React","Django","Linux","PostgreSQL"]}/>
                        </div>
                        <div className="prog">
                            <Progressbar 
                                list=
                                    {[
                                        {skill:"HTML",percent:60},
                                        {skill:"CSS",percent:70},
                                        {skill:"React",percent:80},
                                        {skill:"JavaScript",percent:90},
                                        {skill:"Django",percent:60},
                                        {skill:"Linux",percent:50},
                                        {skill:"PostgreSQL",percent:40}     
                                    ]}
                                />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Skills;