import React from "react";
import dataExp from "./dataExp";

function experience() {
  const data = dataExp.map((data) => {
    return (
    <div key={data.title}>
        <div className="experience__content">
        <div className="experience__time">
          <span className="experience__rounder" />
          <span className={data.line} />
        </div>
        <div className="experience__data bd-grid">
          <h3 className="experience__title text-h3">{data.title}</h3>
          <span className="experience__company">{data.link}</span>
          <span className="experience__company">{data.times}</span>
          <p className="experience__description">{data.descripttion}</p>
          <p className="experience__description">{data.usedTech}</p>
          <p className="experience__description">{data.position}</p>
        </div>
      </div>
    </div>
    );
  });
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title text-h2">Experience</h2>
      <div className="experience__container bd-grid">{data}</div>
    </section>
  );
}

export default experience;
