import apiClient from "./axiosConfig";

export const fetchStock = async (symbol: string) => {
  const response = await apiClient.get("/stocks", {
    params: { symbol },
  });

  return response.data.data;
};
