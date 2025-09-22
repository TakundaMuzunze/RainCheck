import { WeatherCard } from './components/features/weather-card/weather-card';
import { WeatherDisplay } from './components/ui/weather-display';
import { useWeather } from './hooks/useWeather';
import './App.css';
import { Header } from './components/layout/header';

function App() {
  const { weather, loading, error } = useWeather();
  

  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 p-4">
      <Header weather={weather} />

      <WeatherDisplay weather={weather} loading={loading} error={error} />
      <WeatherCard />
    </div>
  );
}

export default App;
