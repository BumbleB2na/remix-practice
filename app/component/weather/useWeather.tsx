import { useEffect, useState } from "react"
import WeatherData from "./WeatherData"

const useWeather = (weatherValue?: WeatherData) => {
	const [weather, setWeather] = useState<WeatherData | null>(weatherValue || null)

	useEffect(() => {
		const API_QUERY = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
		const fetchWeatherApi = async () => {				
			return await fetch(API_QUERY)
				.then(async (result) => {
					setWeather(await result.json())
				})
		}

		let weatherInterval: NodeJS.Timeout
		const fetchWeather = async () => {
			weatherInterval = setInterval(() => {
				try {
					fetchWeatherApi()
				} catch (err) {
					console.error(err)
					clearInterval(weatherInterval)
				}
			}, 10000)
			fetchWeatherApi()
		}

		if(weather === null) {
			fetchWeather()
		}

		return () => {
			if (weather !== null) {
				clearInterval(weatherInterval)
			}
		}
	}, [weather])

	return [weather]
}

export default useWeather