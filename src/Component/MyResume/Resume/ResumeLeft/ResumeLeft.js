import React from "react";
import Education from "./Education/Education";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import "./ResumeLeft.css";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";

function ResumeLeft(props) {
  
  return (
    <div className="resume__left">
      <Home />
      <Social />
      <Profile />
      <Education />
      <Skills />
    </div>
  );
}

export default ResumeLeft;
