import { WeatherCard } from './components/features/weather-card/weather-card';
import { WeatherDisplay } from './components/ui/weather-display';
import './App.css';
import { Header } from './components/layout/header';
import { ConditionsPanel } from './components/ui/weather-conditions';
import { WeatherProvider } from './contexts/WeatherContext';
import { WeeklyForecast } from './components/features/weekly-forecast/weekly-forecast';

function App() {
  return (
    <WeatherProvider>
      <div className="bg-deep-blue mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 overflow-y-auto p-4">
        <Header />
        <WeatherDisplay />
        <ConditionsPanel />
        <WeatherCard />
        <WeeklyForecast />
      </div>
    </WeatherProvider>
  );
}

export default App;

