import React from "react";
import dataSkills from "./dataSkills";
import "./Skills.css";
function Skills() {
  const dataLeft = dataSkills.dataSkillsLeft.map((data) => {
    return (
      <li key={data.id} className="skills__name">
        <span className={data.dotSkill} />
        <i className={data.iconSkill}></i>
        {data.nameSkill}
      </li>
    );
  });
  const dataRight = dataSkills.dataSkillsRight.map((data) => {
    return (
      <li key={data.id} className="skills__name">
        <span className={data.dotSkill} />
        <i className={data.iconSkill}></i>
        {data.nameSkill}
      </li>
    );
  });

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title text-h2">Skills</h2>
      <div className="skills__content bd-grid">
        <ul className="skills__data">{dataLeft}</ul>
        <ul className="skills__data">{dataRight}</ul>
      </div>
    </section>
  );
}

export default Skills;
