import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Pin from "./assets/pin.png";

function App() {
  const [city, setCity] = useState("Pune");
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d4707888cae1cef35d3b4069b3862d3`
  //     )
  //     .then((res) => {
  //       setTemp(res.data.main.temp);
  //       setWeather(res.data.weather[0].main);
  //       setIcon(res.data.weather[0].icon);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [city]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d4707888cae1cef35d3b4069b3862d3`
      );
      setTemp(res.data.main.temp);
      setWeather(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      
      console.log(res.data.weather[0].main);

      if (city === "") {
        city = "Pune";
      }
    }
    fetchData();
  }, [city]);

  console.log("The temp is: ", temp - 273.15 + "°C");
  console.log("The weather is: ", weather);
  console.log("The icon is: ", icon);

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
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="weather-box">
          <div className="temp">{Math.round(temp - 273.15)}°C</div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="icon"
            style={{ width: "120px" }}
          />
          <div className="weather">{weather}</div>
        </div>
      </div>
    </>
  );
}

export default App;
