import type { WeatherData, ForecastData } from '../types/weather';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_BASE_URL;

export async function getWeatherByLocation(city: string): Promise<WeatherData> {
  const response = await fetch(`${apiUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`)
  }

  const data = await response.json();
  return data
}

export async function getWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
  const response = await fetch(`${apiUrl}/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`)
  }

  const data = await response.json();
  return data
}

export async function getWeatherForecast(lat: number, lon: number): Promise<ForecastData> {
  const response = await fetch(`${apiUrl}/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5&aqi=no&alerts=no`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`)
  }

  const data = await response.json();
  return data;
}

