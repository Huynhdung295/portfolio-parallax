import React from "react";

function Language() {
  return (
    <section className="languages section" id="languages">
      <h2 className="section-title text-h2">Languages</h2>
      <div className="languages__container">
        <ul className="languages__content bd-grid">
          <li className="languages__name">
            <span className="languages__circle" />
            English
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Language;
