import React from "react";
import Button from "../Button/Button";
import honda from "../../img/Honda/honda.png";
import movie from "../../img/Movie/movie.png";
import mitech from "../../img/Mitech/mitech.png";
import dashboard from "../../img/Dashboard/dashboard.png";
import portfolio1 from "../../img/Portfolio/portfolio1.png";
import portfolio2 from "../../img/Portfolio/portfolio2.png";
import disney from "../../img/Disney/disney.png";

import "./Project.css";
function Project() {
  const dataProject = [
    {
      style: {"--i": 1 },
      src: honda,
      alt:  "honda",
      title: "Honda UI"
    },
    {
      style: {"--i": 2 },
      src:movie,
      alt:  "movie",
      title: "Booking Movie"
    },
    {
      style: {"--i": 3},
      src:mitech,
      alt:  "mitech",
      title: "Mitech UI"
    },
    {
      style: {"--i": 4 },
      src:dashboard,
      alt:  "dashboard",
      title: "Dashboard UI"
    },
    {
      style: {"--i": 5 },
      src:portfolio1,
      alt:  "portfolio1",
      title: "Portfolio UI - I"
    },
    {
      style: {"--i": 6 },
      src:portfolio2,
      alt:  "portfolio2",
      title: "Portfolio UI - II"
    },
    {
      style: {"--i": 7 },
      src:disney,
      alt:  "disney",
      title: "Disney Plus UI"
    },
    {
      style: {"--i": 8 },
      src:honda,
      alt:  "honda",
      title: "Honda Template"
    }
  ]
  const renderProject = dataProject.map((item)=>{
    return(
      <span style={item.style}>
        <img src={item.src} alt={item.alt}/>
        <h3>{item.title}</h3>
      </span>
    )
  })
  return (
    <div>
       <h2 className="mb-5 text-center">Portfolio</h2>
     <div className="wrapper-project">
     <div className="box-show">
       {renderProject}
      </div>
     </div>

      <Button
        content="Show more my project"
        text="text-dark-b"
        linkTo="/list-project"
      />
    </div>
  );
}

export default Project;
