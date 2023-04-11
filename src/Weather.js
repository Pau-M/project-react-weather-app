import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container border rounded p-3">
        <form>
          <div className="row align-items-center justify-content-center">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus={false}
                className="w-100 p-2 border border-1 rounded"
              ></input>
            </div>
            <div className="col-3 p-0 text-start">
              <button type="submit" className="btn btn-outline-light m-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <button type="button" className="btn btn-outline-light">
                <FontAwesomeIcon icon={faLocationDot} />
              </button>
            </div>
          </div>
        </form>
        <div className="main mt-3 mb-4">
          <h2>Tokio</h2>
          <p>11/04/2023</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg=="
            alt="weather icon"
            width="150px"
          />
          <h1>
            20<span className="unit">°C</span>
          </h1>
        </div>
        <div className="properties">
          <div className="row p-3 ">
            <div className="col-4">
              <FontAwesomeIcon icon={faWind} className="icons" />
              <p>10 km/h</p>
              <p className="opacity-75">wind</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faDroplet} className="icons" />
              <p>50 %</p>
              <p className="opacity-75">humidity</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faEye} className="icons" />
              <p>10 km</p>
              <p className="opacity-75">visibility</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
