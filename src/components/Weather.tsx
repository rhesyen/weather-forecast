"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from "../components/WeatherItem";

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
            <WeatherItem
              weatherItem={weatherItem}
              key={weatherItem.id_stacji}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Weather;
