import React from "react";
import dataSocial from "./dataSocial";

function social() {
  const data = dataSocial.map((data) => {
    return (
      <a key={data.name} href={data.href} target="_blank" rel="noreferrer" className="social__link">
        <i className={data.icon} /> {data.name}
      </a>
    );
  });
  return (
    <section className="social section" id="social">
      <h2 className="section-title text-h2" >Social</h2>

      <div className="social__container bd-grid">{data}</div>
    </section>
  );
}

export default social;
