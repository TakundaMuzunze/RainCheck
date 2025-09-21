export function WeatherDisplay() {
    return ( 
        <div className="flex flex-col w-64 gap-4 items-center justify-center p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-gray-300">
            <span className="text-6xl">⛅</span>
    
            <p className="text-2xl font-medium">28°C</p>

            <div className="flex flex-row w-full gap-6 items-center justify-center">
                <p className="font-medium">High: 31°</p>
                <p className="font-medium">Low: 26°</p>
            </div>
        </div>
    )
}