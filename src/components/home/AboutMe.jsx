import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/resume.pdf";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);

   
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          {showInsta && (
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src="../uw.png"
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
            <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="mailto:yankun@uw.edu"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="email"
                >
                  Contact
                </a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
