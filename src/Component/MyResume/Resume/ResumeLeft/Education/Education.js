import React from "react";
import dataEducation from "./dataEducation";

function education() {
  const dataEdu = dataEducation.map((data) => {
    return ( 
   <div key={data.eduTitle}>
        <div className="education__content">
        <div className="education__time">
          <span className="education__rounder" />
          <span className={data.line} />
        </div>
        <div className="education__data bd-grid">
          <h3 className="education__title text-h3">{data.eduTitle}</h3>
          <span className="education__studies">{data.eduCourse}</span>
          <span className="education__year">{data.eduTimes}</span>
        </div>
      </div>
   </div>
    );
  });
  return (
    <section className="education section" id="education">
      <h2 className="section-title text-h2">Education</h2>

      <div className="education__container bd-grid">{dataEdu}</div>
    </section>
  );
}

export default education;
