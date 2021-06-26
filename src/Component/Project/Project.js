import React from "react";
import Button from "../Button/Button";
import honda from "../../img/Honda/honda.png";
import "./Project.css";
function Project() {
  const dataProject = [
    {
      style: {"--i": 1 },
      src: honda,
      alt:  "honda",
      title: "Honda Template"
    },
    {
      style: {"--i": 2 },
      src:honda,
      alt:  "honda",
      title: "Honda Template"
    },
    {
      style: {"--i": 3},
      src:honda,
      alt:  "honda",
      title: "Honda Template"
    },
    {
      style: {"--i": 4 },
      src:honda,
      alt:  "honda",
      title: "Honda Template"
    },
    {
      style: {"--i": 5 },
      src:honda,
      alt:  "honda",
      title: "Honda Template"
    },
    {
      style: {"--i": 6 },
      src:honda,
      alt:  "honda",
      title: "Honda Template"
    },
    {
      style: {"--i": 7 },
      src:honda,
      alt:  "honda",
      title: "Honda Template"
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
