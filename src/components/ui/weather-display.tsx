import type { WeatherData } from "../../types/weather";

interface Props {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export function WeatherDisplay({ weather, loading, error }: Props) {
  if (loading) {
    return (
      <div className="flex w-64 flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white/20 p-6 backdrop-blur-sm">
        <p className="text-lg">Loading weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-64 flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white/20 p-6 backdrop-blur-sm">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex w-64 flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white/20 p-6 backdrop-blur-sm">
        <p className="text-lg">No weather data</p>
      </div>
    );
  }

  return (
    <div className="flex w-64 flex-col items-center justify-center gap-4 rounded-xl bg-white/20 p-6 backdrop-blur-sm">

      <img src={weather.current.condition.icon} alt="" className="w-20 object-contain self-center" />      
      <p className="text-5xl font-medium">{weather.current.temp_c}°C</p>
      <p className="text-sm text-gray-600">{weather.current.condition.text}</p>
       
      
      <p className="font-medium text-gray-400">Feels like: {weather.current.feelslike_c}°</p>
      {/* <div className="flex w-full flex-row items-center justify-center gap-6">
        <p className="font-medium">Humidity: {weather.current.humidity}%</p>
        <p className="font-medium">Wind: {weather.current.wind_kph} km/h</p>
      </div> */}
    </div>
  );
}
