import { useWeatherContext } from '../../../contexts/WeatherContext';

export function WeeklyForecast() {
  const { forecast } = useWeatherContext();

  const weeklyData = forecast?.forecast.forecastday || [];

  return (
    <div className="backdrop-blur-x flex w-full flex-col items-start justify-center gap-4 rounded-xl border-1 border-gray-400 bg-white/20 p-6 shadow-2xl">
      <p className="text-sm text-gray-200 uppercase">5 day forecast</p>

      <div className="grid w-full grid-rows-5 gap-2">
        {weeklyData.map((day, index) => (
          <div key={index} className="grid grid-cols-3 items-center justify-evenly gap-5 p-2">
            <span className="text-lg font-medium"> {new Date(day.date).toLocaleDateString('en-GB', { weekday: 'long' })}</span>

            <img className="size-8 w-full object-contain" src={day.day.condition.icon} />

            <div className="flex flex-row items-center gap-4">
              <span className="text-lg font-semibold">{day.day.mintemp_c.toFixed(0)} °</span>
              <span className="text-lg font-semibold text-gray-400">{day.day.maxtemp_c.toFixed(0)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

