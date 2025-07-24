import axios from "axios";
import { config } from ".";

const axiosInstance = axios.create({
  baseURL: config.serverUrl,
  withCredentials: true,
});

export default axiosInstance;
