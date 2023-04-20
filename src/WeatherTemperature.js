import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  /*function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }*/

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature m-3">
        <h1>
          {props.celsiusTemp}
          <span className="unit">
            °C{" "}
            {/*|
            <a href="/" onClick={showFahrenheit}>
              °F
    </a>*/}
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = (props.celsiusTemp * 9) / 5 + 32;
    return (
      <div className="weatherTemperature m-3">
        <h1>
          {Math.round(fahrenheit)}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            |°F
          </span>
        </h1>
      </div>
    );
  }
}
