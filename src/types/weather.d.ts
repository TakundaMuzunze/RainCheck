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
    wind_kph: number;
  };
}