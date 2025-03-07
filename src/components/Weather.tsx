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

  return <div className="weather">Pogoda</div>;
};
export default Weather;
