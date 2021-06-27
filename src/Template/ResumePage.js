import React, { useState, useEffect } from "react";
import Resume from "../Component/MyResume/Resume/Resume";
import Button from "../Component/Button/Button";
import Loading from "../Component/Loading/Loading";
function ResumePage() {
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
        <div>
          <Resume />
          <div className="button-fixed">
            <Button content="Go back Home" linkTo="/" text="text-dark-b" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumePage;
