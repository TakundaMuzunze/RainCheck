import { useWeatherContext } from '../../contexts/WeatherContext';

export function ConditionsPanel() {
  const { weather, forecast } = useWeatherContext();
  return (
    <div className="background-blur-xl flex flex-row items-center justify-between gap-8 rounded-xl bg-white/20 p-3">
      <span className="flex flex-row items-end gap-3">
        <span className="">🌧️</span>
        <p className="text-lg">{forecast?.forecast.forecastday[0]?.day.daily_chance_of_rain}%</p>
      </span>

      <span className="flex flex-row items-center gap-3">
        <span className="text-sm">💧 </span>
        <p className="text-lg">{weather?.current.humidity}%</p>
      </span>

      <span className="flex flex-row items-center gap-3">
        <span className="text-sm">💨</span>
        <p className="text-lg">{weather?.current.wind_mph} m/h</p>
      </span>
    </div>
  );
}

