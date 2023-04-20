import React from "react";
import WeatherIcon from "./icons";

export default function ForecastDay(props) {
  function days() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="weekDay">{days()}</div>
      <div className="forecastIcon m-2">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="forecastTemp">
        <span className="maxTemp">{Math.round(props.data.temp.max)}°</span>
        <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
