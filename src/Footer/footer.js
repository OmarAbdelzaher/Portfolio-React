import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="bg-dark text-white footer pt-5 pb-4">
          <div className="row col-12">
            <div className="col-4">
              <h6>GET IN TOUCH</h6>
              <p>
                <FontAwesomeIcon className="me-3" icon={faEnvelope}/>omarzaher@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneSquare}/> 01063204965
              </p>
              
            </div>
            <div className="col-4 text-center pt-3 cont">
              <button className="btn btn-outline-light">CONTACT ME</button>
            </div>
            <div className="col-4 text-end">
                <a href="#" className="anchors"><FontAwesomeIcon className="me-3" icon={faLinkedin} /></a>
                <a href="#" className="anchors"><FontAwesomeIcon className="me-3" icon={faFacebook} /></a>
                <a href="#" className="anchors"><FontAwesomeIcon className="me-3" icon={faTwitter} /></a>
              <p>Copyright © 2022 KR</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
