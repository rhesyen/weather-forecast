"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import WeatherItem from "../components/WeatherItem";
import SearchWeather from "../components/SearchWeather";

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
      <SearchWeather />
      <div className="weather-container">
        {weatherData.map((weatherItem: any) => {
          console.log("Weather Data:", weatherData);
          return (
            <WeatherItem
              key={weatherItem.id_stacji} //kluczowanie key odbywa się tam gdzie mapowanie
              id_stacji={weatherItem.id_stacji}
              stacja={weatherItem.stacja}
              temperatura={weatherItem.temperatura}
              cisnienie={weatherItem.cisnienie}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Weather;
