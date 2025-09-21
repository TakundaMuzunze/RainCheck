import { WeatherCard } from './components/features/weather-card/weather-card'
import { WeatherDisplay } from './components/ui/weather-display'
import './App.css'
import { Header } from './components/layout/header'

function App() {
  return (
    <div className="h-full bg-gray-100 gap-10 flex flex-col items-center justify-center p-4">
      <Header />
      <WeatherDisplay />
      <WeatherCard />
    </div>
  )
}

export default App
