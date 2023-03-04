import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Natalia Pokusa and is{" "}
          <a href="https://github.com/myosotisrose/react-weather-app" target="_blank">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}
