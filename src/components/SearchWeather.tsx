interface SearchWeatherProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchWeather = ({ value, onChange }: SearchWeatherProps) => {
  return (
    <div className="search-weather">
      Szukaj:{" "}
      <input
        className="p-1 border rounded-md m-2"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default SearchWeather;
