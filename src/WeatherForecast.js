import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import { RotatingLines } from "react-loader-spinner";

export default function WeatherForecast(props) {
  const [loaded, loading] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    loading(false);
  }, [props.coordinates]);

  function handleForecast(response) {
    loading(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast p-3">
        <div className="row d-flex justify-content-evenly">
          {forecast.map(function (dailyWeather, index) {
            if (index < 5) {
              return (
                <div className="col-sm-2 mb-sm-2 day" key={index}>
                  <ForecastDay data={dailyWeather} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return <RotatingLines />;
  }
}
