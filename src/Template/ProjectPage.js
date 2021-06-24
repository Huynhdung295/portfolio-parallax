import React from "react";
import Project from "../Component/Pages/Project";
import Button from "../Component/Button/Button";

function ProjectPage() {
  return (
    <div>
      <Project />
      <Button content="Go back Home" linkTo="/" text="text-light-b" />
    </div>
  );
}

export default ProjectPage;
