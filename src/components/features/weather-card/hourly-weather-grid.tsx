import { useWeatherContext } from '../../../contexts/WeatherContext';

export function HourlyWeatherGrid() {
  const { forecast } = useWeatherContext();
  const hoursTodayData = forecast?.forecast.forecastday.flatMap((day) => day.hour) || [];

  const currentHour = new Date();

  const next5Hours = hoursTodayData
    .filter((hour) => {
      const hourTime = new Date(hour.time);
      return hourTime >= currentHour;
    })
    .slice(0, 5);

  return (
    <div className="mt-4 grid grid-cols-5 gap-2">
      {next5Hours.map((day, index) => (
        <div key={index} className="flex flex-col items-center justify-center rounded-lg p-2">
          <span className="text-xs font-medium">
            <p className="text-lg"> {new Date(day.time).getHours()}:00</p>
          </span>
          <span className="text-xs font-medium">
            <img className="w-full object-contain" src={day.condition.icon} />
          </span>
          <span className="text-sm font-semibold">
            <p className="text-lg">{day.temp_c}°</p>
          </span>
        </div>
      ))}
    </div>
  );
}

