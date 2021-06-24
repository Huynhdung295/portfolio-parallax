import React from "react";
import dataInter from "./dataInter";

function Interest() {
  const data = dataInter.map((data)=>{
    return(
      <div key={data.name} className="interests__content">
          <i className={data.icon} />
          <span className="interests__name">{data.name}</span>
        </div>
    )
  })
  return (
    <section className="interests section" id="interests">
      <h2 className="section-title text-h2">Interests</h2>
      <div className="interests__container bd-grid">
        {data}
      </div>
    </section>
  );
}

export default Interest;
