export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };

  current: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;

    condition: {
      text: string;
      icon: string;
      code: number;
    };

    humidity: number;
    wind_mph: number;
    precip_mm: number;
    cloud: number;
  };
}

export interface ForecastData {
  location: {
    name: string;
    country: string;
  };

  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        daily_chance_of_rain: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      hour: Array<{
        time: string;
        temp_c: number;
        chance_of_rain: number;
        condition: {
          text: string;
          icon: string;
        };
      }>;
    }>;
  };
}

