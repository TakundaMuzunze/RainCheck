import { WeatherCard } from './components/features/weather-card/weather-card'
import { WeatherDisplay } from './components/ui/weather-display'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 gap-10 flex flex-col items-center justify-center p-4">
      <WeatherDisplay />
      <WeatherCard />
    </div>
  )
}

export default App
