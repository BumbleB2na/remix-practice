import { z } from "zod"

interface WeatherData {
	current_units: {
		temperature_2m: string
		wind_speed_10m: string
	},
	current: {
		temperature_2m: number
		wind_speed_10m: number
	}
}

export const WeatherDataSchema = z.object({
	current_units: z.object({
		temperature_2m: z.string(),
		wind_speed_10m: z.string()
	}),
	current: z.object({
		temperature_2m: z.number(),
		wind_speed_10m: z.number()
	})
})

export default WeatherData