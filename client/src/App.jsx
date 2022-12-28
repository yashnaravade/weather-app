import React from "react";
import "./App.css";
import Pin from "./assets/pin.png";

function App() {
  return (
    <>
      <div className="container">
        <h1>Weather App</h1>
        <div className="search-box">
          <img src={Pin} style={{ width: "40px" }} alt="pin" />
          <input
            type="text"
            placeholder="Enter City Name"
            className="input-city"
          />
        </div>
      </div>
    </>
  );
}

export default App;
