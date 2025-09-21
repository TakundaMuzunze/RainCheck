interface HourlyWeather {
  time: string;
  temperature: number;
  condition: string;
  icon: string;
}

interface HourlyWeatherGridProps {
  hourlyData: HourlyWeather[];
}

export function HourlyWeatherGrid({ hourlyData }: HourlyWeatherGridProps) {
  return (
    <div className="grid grid-cols-5 gap-2 mt-4">
      {hourlyData.map((hour, index) => (
        <div 
          key={index}
          className="flex flex-col justify-center items-center p-2 bg-white/20 rounded-lg backdrop-blur-sm"
        >
          <span className="text-xs text-gray-600 font-medium">
            {hour.time}
          </span>
          <div className="text-3xl mb-1">
            {hour.icon}
          </div>
          <span className="text-sm font-semibold">
            {hour.temperature}°
          </span>
        </div>
      ))}
    </div>
  );
}
