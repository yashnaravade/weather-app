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

      if (res.data.weather[0].main === "Clouds") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?clouds,sky')";
      }
      if (res.data.weather[0].main === "Clear") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?sky,open')";
      }
      if (res.data.weather[0].main === "Rain") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?rain,sky')";
      }
      if (res.data.weather[0].main === "Snow") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?snow,sky')";
      }
      if (res.data.weather[0].main === "Thunderstorm") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?thunderstorm,sky')";
      }
      if (res.data.weather[0].main === "Drizzle") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?drizzle,sky')";
      }
      if (res.data.weather[0].main === "Mist") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?mist,sky')";
      }
      if (res.data.weather[0].main === "Smoke") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?smoke,sky')";
      }
      if (res.data.weather[0].main === "Haze") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?haze,sky')";
      }
      if (res.data.weather[0].main === "Dust") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?dust,sky')";
      }
      if (res.data.weather[0].main === "Fog") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?fog,smoke,sky')";
      }
      if (res.data.weather[0].main === "Sand") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?sand,sky')";
      }
      if (res.data.weather[0].main === "Ash") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?ash,sky')";
      }
      if (res.data.weather[0].main === "Squall") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?squall,sky')";
      }
      if (res.data.weather[0].main === "Tornado") {
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/1920x1080/?tornado,sky')";
      }

      console.log(res.data.weather[0].main);
    }
    fetchData();
  }, [city]);

  console.log("The temp is: ", temp - 273.15 + "°C");
  console.log("The weather is: ", weather);
  console.log("The icon is: ", icon);

  return (
    <>
      <div className="container">
        

        <div class="row">
          <div class="col-md-12">
            <div className="heading text-center mt-5 text-light">
              <h1>Weather App</h1>
            </div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-6 bg-transparent">
            <div className="search-box">
              <img src={Pin} style={{ width: "40px" }} alt="pin" />
              <input
                type="text"
                placeholder="City Name"
                className="input-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(temp - 273.15)}°C</div>
              <img
                src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                alt="icon"
                style={{ width: "120px" }}
              />
              <div className="weather">{weather}</div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
