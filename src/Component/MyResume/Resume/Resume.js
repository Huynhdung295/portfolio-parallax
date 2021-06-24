import React, { useEffect } from "react";
import Navbar from "./NavbarRS/Navbar";
import ResumeLeft from "./ResumeLeft/ResumeLeft";
import ResumeRight from "./ResumeRight/ResumeRight";
import ScrollTop from "./ScrollTop/ScrollTop";

import "./Resume.css";

function Resume() {

  useEffect(() => {
    document.body.classList.add("resumeCV-bg");
  }, [])

  return (
    <div className="my-resume">
      <Navbar />
      <main className="bd-container">
        <div className="resume" id="area-cv">
          <ResumeLeft />
          <ResumeRight />
        </div>
      </main>
      <ScrollTop />
    </div>
  );
}

export default Resume;
