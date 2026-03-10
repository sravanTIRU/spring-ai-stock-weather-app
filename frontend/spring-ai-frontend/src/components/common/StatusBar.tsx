import { Cloud, TrendingUp, Brain, Github } from "lucide-react";

function StatusBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
        {/* API Status */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Cloud size={16} className="text-blue-500" />
            <span className="font-medium">Weather API</span>
            <span className="text-green-600">● Active</span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-green-500" />
            <span className="font-medium">Stock API</span>
            <span className="text-green-600">● Active</span>
          </div>

          <div className="flex items-center gap-2">
            <Brain size={16} className="text-purple-500" />
            <span className="font-medium">AI Service</span>
            <span className="text-yellow-600">● Ollama_phi3_local_model</span>
          </div>
        </div>

        {/* Author + Source */}
        <div className="flex items-center gap-4">
          <span className="text-gray-500">
            Built by <strong>SravanTG</strong>
          </span>

          <a
            href="https://github.com/sravanTIRU/spring-ai-stock-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 border rounded-md text-gray-700 hover:bg-black hover:text-white transition"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
