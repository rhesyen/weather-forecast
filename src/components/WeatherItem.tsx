const WeatherItem = (props: any) => {
  return (
    <div className="weather-item">
      {" "}
      //kluczowanie key odbywa się tam gdzie mapowanie
      <h2>{props.stacja}</h2>
      <p>Temperatura: {props.temperatura} st. C</p>
      <p>
        Ciśnienie: {props.cisnienie ? props.cisnienie + " hPa" : "brak danych"}{" "}
      </p>
    </div>
  );
};

export default WeatherItem;
