import type { WeatherData } from '../../types/weather';
import { PinIcon } from '../icons/pin-icon';

interface Props {
  weather: WeatherData | null
}

export function Header({weather}: Props) {
  return (
    <header className="flex w-full flex-row items-center justify-between px-2 py-5">
      <div className="flex flex-row items-center gap-2">
        <PinIcon />
        <h1 className="text-lg font-medium">{weather?.location.name}</h1>
      </div>
    </header>
  );
}
