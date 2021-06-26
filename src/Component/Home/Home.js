import React from "react";
import "./Home.css";
import useTyped from "use-typed";

function Home() {
  const InforTyped = React.useRef(null);

  useTyped(InforTyped, {
    strings: [
      "I'm Hồ Huỳnh Dũng",
      "I'm a Front-end Developer",
      "And I love Technology",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });

  return (
    <div>
      <div className="content-home">
        <div className="text-home-intro fade-in">
          Welcome to my portfolio!
        </div>
        <span className="text-typed" ref={InforTyped} />
      </div>
    </div>
  );
}

export default Home;
