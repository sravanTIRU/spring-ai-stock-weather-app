type StockData = {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  aiExplanation: string;
};

type StockCardProps = {
  data: StockData;
};

function StockCard({ data }: StockCardProps) {
  const changeColor = data.change >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="mt-6">
      <h3 className="text-md font-semibold mb-3 text-gray-700">Stock Result</h3>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="bg-white border rounded-lg p-3 shadow-sm">
          <p className="text-gray-500 text-xs">Symbol</p>
          <p className="text-lg font-semibold">{data.symbol}</p>
        </div>

        <div className="bg-white border rounded-lg p-3 shadow-sm">
          <p className="text-gray-500 text-xs">Price</p>
          <p className="text-lg font-semibold">${data.price}</p>
        </div>

        <div className="bg-white border rounded-lg p-3 shadow-sm">
          <p className="text-gray-500 text-xs">Change</p>
          <p className={`text-lg font-semibold ${changeColor}`}>
            {data.change}
          </p>
        </div>

        <div className="bg-white border rounded-lg p-3 shadow-sm">
          <p className="text-gray-500 text-xs">Change %</p>
          <p className={`text-lg font-semibold ${changeColor}`}>
            {data.changePercent}%
          </p>
        </div>

        <div className="bg-white border rounded-lg p-3 shadow-sm col-span-2">
          <p className="text-gray-500 text-xs">Volume</p>
          <p className="text-lg font-semibold">
            {data.volume.toLocaleString()}
          </p>
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

export default StockCard;
