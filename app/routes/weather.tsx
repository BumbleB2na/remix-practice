import type { MetaFunction } from "@remix-run/node";
import useWeather from "~/component/weather/useWeather";
import { LinkToIndex, Wrapper } from "./_index";

export const meta: MetaFunction = () => {
	return [
		{ title: "Weather" },
		{ name: "description", content: "Gets the current weather" },
	];
};

export default function Index() {
	const [weather] = useWeather()

	return (
		<Wrapper>
			<h1>Weather</h1>
			{weather === null && <p>Loading...</p>}
			{weather !== null && <p>Calgary temperature: {weather.current.temperature_2m}{weather.current_units.temperature_2m}, wind speed: {weather.current.wind_speed_10m}{weather.current_units.wind_speed_10m}</p>}
			<LinkToIndex />
		</Wrapper>
	);
}
