import React, { useEffect, useState } from "react";
import Page from "../Component/Pages/Pages";
import Navbar from "../Component/Navbar/Navbar";
import Loading from "../Component/Loading/Loading";

function HomePage() {
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
          <Navbar />
          <Page />
        </div>
      )}
    </div>
  );
}

export default HomePage;
