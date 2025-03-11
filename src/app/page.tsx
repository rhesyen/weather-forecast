import Weather from "../components/Weather";
import ChangeModeButton from "../components/ChangeModeButton";

export default function HomePage() {
  return (
    <div>
      <ChangeModeButton />
      <Weather />
    </div>
  );
}
