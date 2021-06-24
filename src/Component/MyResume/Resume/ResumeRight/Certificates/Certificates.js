import React from "react";
import dataCer from "./dataCer";

function certificate() {
  const data = dataCer.map((data) => {
    return (
      <div key={data.title} className="certificate__container bd-grid">
        <h3 className="certificate__title text-h3">{data.title}</h3>
        <p className="certificate__description">{data.description}</p>
        <p className="certificate__description">{data.des2}</p>
        <p className="certificate__description">{data.des3}</p>
      </div>
    );
  });
  return (
    <section className="certificate section" id="certificates">
      <h2 className="section-title text-h2">Certificates</h2>
      {data}
    </section>
  );
}

export default certificate;
