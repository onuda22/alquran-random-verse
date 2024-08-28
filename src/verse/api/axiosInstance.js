import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://json-server-vercel-puce-gamma.vercel.app/api/",
  timeout: 5000,
});

export default axiosInstance;
