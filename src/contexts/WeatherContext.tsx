import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useWeather } from '../hooks/useWeather';
import { useForecast } from '../hooks/useForecast';
import type { WeatherData, ForecastData } from '../types/weather';

interface WeatherContextType {
  weather: WeatherData | null;
  forecast: ForecastData | null;
  loading: boolean;
  error: string | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

interface WeatherProviderProps {
  children: ReactNode;
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const { weather, loading: weatherLoading, error: weatherError } = useWeather();
  const { forecast, loading: forecastLoading, error: forecastError } = useForecast();

  const loading = weatherLoading || forecastLoading;
  const error = weatherError || forecastError;

  const value: WeatherContextType = {
    weather,
    forecast,
    loading,
    error,
  };

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}

export function useWeatherContext(): WeatherContextType {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
}

