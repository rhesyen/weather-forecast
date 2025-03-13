"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://danepubliczne.imgw.pl/api/data/synop",
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); //pusta tablica zależności, useEffect wywoła się tylko raz (po załadowaniu komponentu)

  console.log(weatherData);

  return (
    <div className="weather">
      <div className="weather-container">
        {weatherData.map((weatherItem: any) => {
          return (
            <div className="weather-item" key={weatherItem.id_stacji}>
              <h2>{weatherItem.stacja}</h2>
              <p>Temperatura: {weatherItem.temperatura} st. C</p>
              <p>
                Ciśnienie:{" "}
                {weatherItem.cisnienie
                  ? weatherItem.cisnienie + " hPa"
                  : "brak danych"}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Weather;
