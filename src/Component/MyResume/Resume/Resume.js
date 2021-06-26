import React, { useEffect, useState } from "react";
import Navbar from "./NavbarRS/Navbar";
import ResumeLeft from "./ResumeLeft/ResumeLeft";
import ResumeRight from "./ResumeRight/ResumeRight";
import ScrollTop from "./ScrollTop/ScrollTop";
import Loading from "../../Loading/Loading";

import "./Resume.css";

function Resume() {
  useEffect(() => {
    document.body.classList.add("resumeCV-bg");
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearInterval(loading);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

export default Resume;
