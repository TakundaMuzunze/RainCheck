import { HourlyWeatherGrid } from './hourly-weather-grid';

type sampleWeather = {
    time: string, 
    temperature: number, 
    condition: string, 
    icon: string
}

const sampleHourlyData: sampleWeather[] = [
  { time: '12PM', temperature: 22, condition: 'sunny', icon: '☀️' },
  { time: '1PM', temperature: 24, condition: 'sunny', icon: '☀️' },
  { time: '2PM', temperature: 26, condition: 'partly-cloudy', icon: '⛅' },
  { time: '3PM', temperature: 25, condition: 'cloudy', icon: '☁️' },
  { time: '4PM', temperature: 20, condition: 'cloudy', icon: '☁️' },
];

export function WeatherCard() {
    return (
        <article 
            className="flex flex-col items-center justify-between p-6 backdrop-blur-xl bg-transparent rounded-xl shadow-xs w-full border-1 border-gray-400"
            
        >
            <div className="flex flex-row items-center w-full justify-between">
                <p className="text-lg font-medium">
                    Today
                </p>
                <p className="text-lg font-medium">
                    Date
                </p>
            </div>

            <div className="w-full">
                <HourlyWeatherGrid hourlyData={sampleHourlyData} />
            </div>
        </article>
    )
}