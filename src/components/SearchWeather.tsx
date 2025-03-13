const SearchWeather = (props: any) => {
  return (
    <div className="search-weather">
      Szukaj: <input type="text" {...props} />
    </div>
  );
};
export default SearchWeather;
