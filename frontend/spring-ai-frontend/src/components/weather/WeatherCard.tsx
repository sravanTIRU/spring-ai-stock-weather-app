type WeatherData = {
  temperature: number;
  windspeed: number;
  weatherCode: number;
  aiExplanation: string;
};

type WeatherCardProps = {
  data: WeatherData;
};

function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="mt-6">
      <h3 className="text-md font-semibold mb-3 text-gray-700">
        Weather Result
      </h3>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="bg-white border rounded-lg p-3 text-center shadow-sm">
          <p className="text-gray-500 text-xs">Temperature</p>
          <p className="text-lg font-semibold">{data.temperature}°C</p>
        </div>

        <div className="bg-white border rounded-lg p-3 text-center shadow-sm">
          <p className="text-gray-500 text-xs">Wind Speed</p>
          <p className="text-lg font-semibold">{data.windspeed} km/h</p>
        </div>

        <div className="bg-white border rounded-lg p-3 text-center shadow-sm">
          <p className="text-gray-500 text-xs">Weather Code</p>
          <p className="text-lg font-semibold">{data.weatherCode}</p>
        </div>
      </div>

      {/* AI Insight */}
      <div className="mt-4 bg-blue-50 border border-blue-200 p-4 rounded-lg">
        <p className="text-xs text-blue-600 font-semibold mb-1">AI INSIGHT</p>

        <p className="text-sm text-gray-700">{data.aiExplanation}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
