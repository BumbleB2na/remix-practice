import '@testing-library/jest-dom'
import useWeather from "./useWeather"
import { renderHook, waitFor } from '@testing-library/react'
import WeatherData, { WeatherDataSchema } from './WeatherData';

const MOCK_WEATHER_API_RESPONSE:WeatherData = { current: { temperature_2m: 10.01, wind_speed_10m: 11.11 }, current_units: { temperature_2m: 'C', wind_speed_10m: 'km/h' } }

window.fetch = jest.fn().mockResolvedValue({
	json: () => Promise.resolve(MOCK_WEATHER_API_RESPONSE),
	headers: new Headers(),
	ok: true,
	redirected: false,
	status: 200,
	statusText: 'OK',
	type: 'basic',
	url: 'http://example.com',
});

beforeEach(() => {
	(fetch as jest.Mock).mockClear();
});

describe('useWeather', () => {
	it('returns null until data fetched then it returns that data', async () => {
		const { result } = renderHook(() => useWeather())
		const weatherData = result.current[0]
		expect(weatherData).toBe(null)
		await waitFor(() => expect(result.current[0]).not.toBe(null))
		expect(result.current[0]).toEqual(MOCK_WEATHER_API_RESPONSE)
		expect(WeatherDataSchema.parse(result.current[0])).toEqual(MOCK_WEATHER_API_RESPONSE)
	})
})