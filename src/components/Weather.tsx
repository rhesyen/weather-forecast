"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import WeatherItem from "../components/WeatherItem";
import SearchWeather from "../components/SearchWeather";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchWeatherTerm, setSearchWeatherTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchWeatherTerm);
    }, 50); //tzw debounce - czekamy 50ms po ostatnim wpisanym znaku

    return () => {
      clearTimeout(handler); //czyścimy poprzedni timeout jeśli użytkownik jeszcze pisze
    };
  }, [searchWeatherTerm]);

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

    const interval = setInterval(() => {
      fetchData();
    }, 6000); //fetch co 60 sekund
    return () => clearInterval(interval); //czyszczenie interval po odmontowaniu
  }, []); //pusta tablica zależności, useEffect wywoła się tylko raz (po załadowaniu komponentu)

  const filteredData = useMemo(() => {
    return weatherData.filter((item: any) =>
      item.stacja.toLowerCase().includes(searchWeatherTerm.toLowerCase()),
    );
  }, [weatherData, searchWeatherTerm]); //filtrowanie tylko po nazwie stacji

  return (
    <div className="weather">
      <SearchWeather
        value={debouncedSearchTerm}
        onChange={(e) => setSearchWeatherTerm(e.target.value)}
      />
      <div className="weather-container">
        {filteredData.map((weatherItem: any) => {
          //console.log("Weather Data:", weatherData);
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
