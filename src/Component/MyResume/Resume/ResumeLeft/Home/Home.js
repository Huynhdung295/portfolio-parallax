import React from "react";
import me from "../../../img/me.png";
import {clickGene} from "../../../Download/downloadCV"
import pdf from "../../../Download/hohuynhdung-cv.pdf"


function Home(props) {
  const selectTheme = () => {
    // Const
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";

    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }
    // Active
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={me} alt="avt" className="home__img" />
          <h1 className="home__title text-h1">HỒ HUỲNH DŨNG</h1>
          <h3 className="home__profession text-h3">Front End Developer</h3>
          <div>
            <a href={pdf} download="hohuynhdung" className="home__button-movil">
              Download
            </a>
          </div>
        </div>
        <div className="home__address bd-grid">
          <span className="home__infomartion">
            <i className="bx bx-map home__icon" /> District 7, HCMC
          </span>
          <span className="home__infomartion">
            <i className="bx bx-envelope home__icon" /> hohuynhdung@gmail.com
          </span>
          <span className="home__infomartion">
            <i className="bx bx-phone home__icon" /> 0889 310 211
          </span>
        </div>
      </div>
      {/* Theme change button */}
      <i
        className="bx bx-moon change-theme"
        onClick={selectTheme}
        title="Theme"
        id="theme-button"
      />
      {/* Button Download */}
      <i
        onClick={clickGene}
        className="bx bx-download generate-pdf"
        title="Generate PDF"
        id="resume-button"
      />
    </section>
  );
}

export default Home;
