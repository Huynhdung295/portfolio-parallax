import React, { useEffect, useState } from "react";
import Page from "../Component/Pages/Pages";
import Navbar from "../Component/Navbar/Navbar";
import Loading from "../Component/Loading/Loading";

function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const isLoading = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(isLoading);
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
