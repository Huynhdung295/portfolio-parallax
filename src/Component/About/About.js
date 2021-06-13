import React from "react";
import useTyped from "use-typed";

import "./About.css";

function About() {
  const ver1 = React.useRef(null);
  const ver2 = React.useRef(null);
  const ver3 = React.useRef(null);

  useTyped(ver1, {
    strings: [
      "- I’m a Front-end developer with nearly a year of self-study experience in building web application (ReactJS)",
    ],
    typeSpeed: 45,
    loop: false,
    startDelay: 500,
    showCursor: false,
  });
  useTyped(ver2, {
    strings: [
      "- I love learning new technologies and building valuable application that helps others with their work.",
    ],
    typeSpeed: 45,
    loop: false,
    startDelay: 8500,
    showCursor: false,
  });
  useTyped(ver3, {
    strings: ["- My hobby is reading and technology."],
    typeSpeed: 45,
    loop: false,
    startDelay: 16000,
    showCursor: false,
  });

  return (
    <div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3"></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
          <div className="text-about">
            <span ref={ver1} />
            <br />
            <span ref={ver2} />
            <br />
            <span ref={ver3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
