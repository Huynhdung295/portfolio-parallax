import React from "react";
import Certificate from "./Certificates/Certificates";
import Experience from "./Experience/Experience";
import Interest from "./Interests/Interests";
import Language from "./Languages/Languages";
import Reference from "./References/References";
import "./ResumeRight.css";

function ResumeRight() {
  return (
    <div className="resume__right">
      <Experience />
      <Certificate />
      <Reference />
      <Language />
      <Interest />
    </div>
  );
}

export default ResumeRight;
