import React, {useState, useEffect} from "react";
import Project from "../Component/Pages/Project";
import Button from "../Component/Button/Button";
import Loading from "../Component/Loading/Loading";

function ProjectPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearInterval(loading);
    };
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        ((<Project />),
        (<Button content="Go back Home" linkTo="/" text="text-light-b" />))
      )}
    </div>
  );
}

export default ProjectPage;
