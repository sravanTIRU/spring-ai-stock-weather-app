import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

type WeatherFormProps = {
  onSubmit: (lat: string, lon: string) => void;
  loading: boolean;
};

const locations = [
  { name: "Hyderabad", lat: "17.3850", lon: "78.4867" },
  { name: "Chennai", lat: "13.0827", lon: "80.2707" },
  { name: "Delhi", lat: "28.6139", lon: "77.2090" },
  { name: "Texas", lat: "31.9686", lon: "-99.9018" },
  { name: "California", lat: "36.7783", lon: "-119.4179" },
];

function WeatherForm({ onSubmit, loading }: WeatherFormProps) {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSubmit = () => {
    if (!lat || !lon) return;
    onSubmit(lat, lon);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Quick Locations */}
      <div className="flex flex-wrap gap-2">
        {locations.map((loc) => (
          <button
            key={loc.name}
            onClick={() => onSubmit(loc.lat, loc.lon)}
            className="text-xs px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-50 transition"
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Manual Inputs */}
      <Input
        label="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="e.g. 17.3850"
      />

      <Input
        label="Longitude"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
        placeholder="e.g. 78.4867"
      />

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Fetching..." : "Get Weather"}
      </Button>
    </div>
  );
}

export default WeatherForm;
