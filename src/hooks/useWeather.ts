import { useState, useEffect } from 'react';
import type { WeatherData } from '../types/weather';
import { getWeatherByCoords, getWeatherByLocation } from '../api/weather';
import { useGeolocation } from './useGeolocation';

interface UseWeatherState {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useWeather(): UseWeatherState {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { latitude, longitude, error: geoError, loading: geoLoading } = useGeolocation();

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      let data: WeatherData;
      
      if (latitude && longitude) {
        data = await getWeatherByCoords(latitude, longitude);
      } else if (geoError) {
        data = await getWeatherByLocation('London');
      } else {
        throw new Error('Unable to retrieve location');
      }
      
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!geoLoading) {
      fetchWeather();
    }
  }, [latitude, longitude, geoLoading, geoError]);

  return {
    weather,
    loading: loading || geoLoading,
    error: error || geoError,
    refetch: fetchWeather,
  };
}
