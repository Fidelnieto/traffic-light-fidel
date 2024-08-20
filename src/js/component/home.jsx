import React, { useState } from "react";

//create your first component
const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="mt-5">
      <div
        className="row col-1 bg-dark mx-auto"
        style={{ width: "50px", height: "110px" }}
      ></div>
      <div
        className="row col-2 bg-dark mx-auto pb-4"
        style={{ width: "140px" }}
      >
        <div id="redLight">
          <button
            id="redButton"
            className="mx-auto mt-3"
            onClick={handleClick}
          ></button>
        </div>
        <div id="yellowLight">
          <button id="yellowButton" className="mx-auto mt-2"></button>
        </div>
        <div id="greenLight">
          <button id="greenButton" className="mx-auto mt-2"></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
