import { WeatherCard } from './components/features/weather-card/weather-card';
import { WeatherDisplay } from './components/ui/weather-display/weather-display';
import { useWeather } from './hooks/useWeather';
import './App.css';
import { useForecast } from './hooks/useForecast';
import { Header } from './components/layout/header/header';
import { ConditionsPanel } from './components/ui/weather-conditions-bar/weather-conditions';

function App() {
  const { weather, loading, error } = useWeather();
  const { forecast } = useForecast();

  return (
    <div className="bg-deep-blue mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 overflow-y-auto p-4">
      <Header weather={weather} />

      <WeatherDisplay weather={weather} forecast={forecast} loading={loading} error={error} />
      <ConditionsPanel forecast={forecast} weather={weather} />
      <WeatherCard forecast={forecast} weather={weather} />
    </div>
  );
}

export default App;

