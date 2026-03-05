import { useState } from "react";
import { CloudSun, TrendingUp, Sparkles } from "lucide-react";

import WeatherForm from "../components/weather/WeatherForm";
import WeatherCard from "../components/weather/WeatherCard";
import StockForm from "../components/stocks/StockForm";
import StockCard from "../components/stocks/StockCard";
import StatusBar from "../components/common/StatusBar";

import { fetchWeather } from "../api/weatherApi";
import { fetchStock } from "../api/stockApi";

type WeatherData = {
  temperature: number;
  windspeed: number;
  weatherCode: number;
  aiExplanation: string;
};

type StockData = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  aiExplanation: string;
};

function Dashboard() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const [stockData, setStockData] = useState<StockData | null>(null);
  const [stockLoading, setStockLoading] = useState(false);

  const handleWeatherSubmit = async (lat: string, lon: string) => {
    try {
      setWeatherLoading(true);
      const data = await fetchWeather(lat, lon);
      setWeatherData(data);
    } catch (error) {
      console.error("Weather API error:", error);
    } finally {
      setWeatherLoading(false);
    }
  };

  const handleStockSubmit = async (symbol: string) => {
    try {
      setStockLoading(true);
      const data = await fetchStock(symbol);
      setStockData(data);
    } catch (error) {
      console.error("Stock API error:", error);
    } finally {
      setStockLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* System Status */}
      <StatusBar />

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 text-white">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles size={22} />
            Spring AI Demo Dashboard
          </h1>

          <p className="text-sm text-slate-300">
            AI-Powered Weather and Stock Insights
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weather Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CloudSun size={20} className="text-blue-500" />
              Weather Intelligence
            </h2>

            <WeatherForm
              onSubmit={handleWeatherSubmit}
              loading={weatherLoading}
            />

            {weatherData && <WeatherCard data={weatherData} />}
          </div>

          {/* Stock Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-500" />
              Stock Intelligence
            </h2>

            <StockForm onSubmit={handleStockSubmit} loading={stockLoading} />

            {stockData && <StockCard data={stockData} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
