import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

export default axiosInstance;
