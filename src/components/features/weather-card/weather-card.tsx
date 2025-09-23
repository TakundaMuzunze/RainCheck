import { useWeatherContext } from '../../../contexts/WeatherContext';
import { HourlyWeatherGrid } from './hourly-weather-grid';

export function WeatherCard() {
  const { weather, forecast } = useWeatherContext();
  return (
    <article className="flex w-full flex-col items-center justify-between gap-4 rounded-xl border-1 border-gray-400 bg-white/20 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex w-full flex-row items-center justify-between">
        <p className="text-lg font-medium">Today</p>

        <p className="text-lsg font-medium">
          {new Date(weather?.location.localtime).toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })}
        </p>
      </div>

      <div className="w-full">
        <HourlyWeatherGrid />
      </div>
    </article>
  );
}

