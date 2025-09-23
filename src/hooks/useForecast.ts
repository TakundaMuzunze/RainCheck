import { useState, useEffect } from 'react';
import type { ForecastData } from '../types/weather';
import { getWeatherForecast } from '../api/weather';
import { useGeolocation } from './useGeolocation';

export function useForecast() {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { latitude, longitude, error: geoError, loading: geoLoading } = useGeolocation();

  useEffect(() => {
    const fetchForecast = async () => {
      if (!latitude || !longitude) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getWeatherForecast(latitude, longitude);
        setForecast(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch forecast');
      } finally {
        setLoading(false);
      }
    };

    if (!geoLoading && latitude && longitude) {
      fetchForecast();
    }
  }, [latitude, longitude, geoLoading]);

  return {
    forecast,
    loading: loading || geoLoading,
    error: error || geoError,
  };
}


