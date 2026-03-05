import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

type StockFormProps = {
  onSubmit: (symbol: string) => void;
  loading: boolean;
};

const popularStocks = ["AAPL", "TSLA", "NVDA", "MSFT", "GOOGL"];

function StockForm({ onSubmit, loading }: StockFormProps) {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = () => {
    if (!symbol.trim()) return;
    onSubmit(symbol.toUpperCase());
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Quick Stock Suggestions */}
      <div className="flex flex-wrap gap-2">
        {popularStocks.map((stock) => (
          <button
            key={stock}
            onClick={() => onSubmit(stock)}
            className="text-xs px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50 transition"
          >
            {stock}
          </button>
        ))}
      </div>

      {/* Manual Input */}
      <Input
        label="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="e.g. AAPL"
      />

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Fetching..." : "Get Stock"}
      </Button>
    </div>
  );
}

export default StockForm;
