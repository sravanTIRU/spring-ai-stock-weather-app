import apiClient from "./axiosConfig";

export const fetchWeather = async (lat: string, lon: string) => {
  const response = await apiClient.get("/weather", {
    params: { lat, lon },
  });

  return response.data.data;
};
