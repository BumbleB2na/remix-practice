import type { MetaFunction } from "@remix-run/node";
import useWeather from "~/component/weather/useWeather";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const [weather] = useWeather()

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Weather</h1>
			{weather === null && <p>Loading...</p>}
			{weather !== null && <p>{weather.current.temperature_2m}{weather.current_units.temperature_2m}</p>}
		</div>
	);
}
