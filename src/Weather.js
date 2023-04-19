import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

import VideoBackground from "./VideoBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import WeatherProps from "./WeatherProps";
import { RotatingLines } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      visibility: response.data.visibility,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function localWeather(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function geoLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(localWeather);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <VideoBackground
          url="https://cdn.coverr.co/videos/coverr-cloudy-sky-2765/1080p.mp4"
          playing={true}
          loop={true}
          volume={0}
        />
        <div className="container border rounded p-3">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center justify-content-center">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus={false}
                  className="w-100 p-2 border border-1 rounded"
                  onChange={cityChange}
                ></input>
              </div>
              <div className="col-3 p-0 text-start">
                <button
                  type="submit"
                  title="Search"
                  className="btn btn-outline-secondary m-1"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button
                  type="button"
                  title="Geolocation"
                  className="btn btn-outline-secondary"
                  onClick={geoLocation}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            </div>
          </form>
          <WeatherProps data={weatherData} />
          <hr />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return <RotatingLines />;
  }
}
