import React from "react";
interface WeatherItemProps {
  id_stacji: string;
  stacja: string;
  temperatura: string;
  cisnienie: string;
}

const WeatherItemComponent = ({
  id_stacji,
  stacja,
  temperatura,
  cisnienie,
}: WeatherItemProps) => {
  return (
    <div key={id_stacji} className="weather-item">
      <h2>{stacja}</h2>
      <p>Temperatura: {temperatura} st. C</p>
      <p>Ciśnienie: {cisnienie ? cisnienie + " hPa" : "brak danych"} </p>
    </div>
  );
};

//optymalizacja komponentu funkcyjnego, żeby się renderował tylko wtedy gdy zmienią się wartości (propsy)
const WeatherItem = React.memo<WeatherItemProps>(WeatherItemComponent);

export default WeatherItem;
