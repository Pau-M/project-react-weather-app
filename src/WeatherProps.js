import React from "react";
import DateFormat from "./Date";
import WeatherIcon from "./icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function WeatherProps(props) {
  return (
    <div className="WeatherProps mt-3 mb-4">
      <h2>{props.data.city}</h2>
      <p>
        <DateFormat date={props.data.date} />
      </p>
      <WeatherIcon code={props.data.icon} />
      <p>{props.data.description}</p>
      <h1>
        {props.data.temperature}
        <span className="unit">°C</span>
      </h1>
      <div className="properties">
        <div className="row p-3 ">
          <div className="col-4">
            <FontAwesomeIcon icon={faWind} className="icons" />
            <p>{props.data.wind} km/h</p>
            <small>wind</small>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faDroplet} className="icons" />
            <p>{props.data.humidity} %</p>
            <small>humidity</small>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faEye} className="icons" />
            <p>{props.data.visibility} m</p>
            <small>visibility</small>
          </div>
        </div>
      </div>
    </div>
  );
}
