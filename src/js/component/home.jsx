import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const [selectedButton, setSelectedButton] = useState(false);

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  useEffect(effectFunction, dependencyArray);

  const dependencyArray = [selectedButton];

  function effectFunction() {
    console.log("Traffic light changed!");
  }

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
            className={`redButton ${
              selectedButton === "red" ? "selected" : ""
            }`}
            onClick={() => handleClick("red")}
          ></button>
        </div>
        <div id="yellowLight">
          <button
            className={`yellowButton ${
              selectedButton === "yellow" ? "selected" : ""
            }`}
            onClick={() => handleClick("yellow")}
          ></button>
        </div>
        <div id="greenLight">
          <button
            className={`greenButton ${
              selectedButton === "green" ? "selected" : ""
            }`}
            onClick={() => handleClick("green")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
