import "./App.css";
import Weather from "./Weather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <Weather city="Tokyo" />
      <footer>
        Project coded by{" "}
        <a
          href="https://github.com/Pau-M"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paulina Mozga
        </a>
        <br />
        <a
          href="https://github.com/Pau-M/project-react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
          title="Project on GitHub"
        >
          <FontAwesomeIcon icon={faSquareGithub} className="icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
