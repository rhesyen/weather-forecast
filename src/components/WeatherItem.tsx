interface WeatherItemProps {
  id_stacji: string;
  stacja: string;
  temperatura: string;
  cisnienie: string;
}

const WeatherItem = ({
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

export default WeatherItem;
