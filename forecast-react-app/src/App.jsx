import React from "react";
import Header from "./Header";
import Temperature from "./Temperature";
import { Vortex } from "react-loader-spinner";
import "./App.css";

function App() {
  return (
    <>
      <h1>Weather App In React</h1>
      <br />
      <div className="App">
        <div class="container">
          <div class="today-info">
            <div class="left-info">
              <h2 id="city">
                Midrand
                <br />
              </h2>
              <br />
              <h3>
                <br />
                <br />
                <span id="date">
                  Friday 07:44
                  <br />
                  03/Dec
                </span>
              </h3>
              <div class="today-weather">
                <strong id="temperature">25</strong>
                <span class="units">°C</span>
              </div>
            </div>
            <div class="right-info">
              <div class="day-info">
                <div class="search-button">
                  <form id="search-form">
                    <input
                      type="search"
                      placeholder="Enter your City..."
                      class="form-control"
                      id="city-search"
                      autocomplete="off"
                    />
                    <input type="submit" value="Search" />
                  </form>
                  <br />
                </div>
                <ul>
                  <li>
                    Humidity: <span id="humidity">80</span> %
                  </li>
                  <li>
                    Wind:<span id="wind">7</span> km/h
                  </li>
                </ul>
                <br />
                <div class="weather-forecast" id="forecast">
                  <ul>
                    <Temperature day="Sat" date="04" icon="☀️" temp={19} />
                    <Temperature day="Sun" date="05" icon="⛅" temp={16} />
                    <Temperature day="Mon" date="06" icon="💧" temp={12} />
                    <Temperature day="Tue" date="07" icon="☀️" temp={18} />
                    <Temperature day="Wen" date="08" icon="⛅️" temp={15} />
                    <Temperature day="Thu" date="09" icon="⛅️" temp={13} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <a
          href="https://github.com/SamanthaMk/forecast-react-app"
          className="code"
        >
          Open Source Code created by Siphosethu Samantha Mkandwna
          <Vortex
            visible={true}
            height="40"
            width="40"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["blue", "blueviolet", "white", "orange"]}
          />
        </a>
      </div>
    </>
  );
}

export default App;
