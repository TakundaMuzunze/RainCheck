import { useWeatherContext } from '../../contexts/WeatherContext';

export function WeatherDisplay() {
  const { weather, forecast, loading, error } = useWeatherContext();
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
    <div className="flex w-64 flex-col items-center justify-center gap-4 rounded-xl p-6 backdrop-blur-2xl">
      <img src={weather.current.condition.icon} alt="" className="w-20 self-center object-contain" />
      <p className="text-5xl font-medium">{weather.current.temp_c}°C</p>

      <p className="font-medium text-gray-400">Feels like: {weather.current.feelslike_c}°</p>

      <div className="flex flex-row items-center gap-4">
        <p className="font-medium text-gray-400">HI: {forecast?.forecast.forecastday[0].day.maxtemp_c}°</p>
        <p className="font-medium text-gray-400">LO: {forecast?.forecast.forecastday[0].day.mintemp_c}°</p>
      </div>
    </div>
  );
}

