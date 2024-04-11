import axios from "axios";
import { cookies } from "next/headers";
import "server-only";

const apiAxios = axios.create({ baseURL: process.env.BASE_API_URL });

apiAxios.interceptors.request.use(
  (config) => {
    const token = cookies().get(process.env.TOKEN_COOKIE_NAME)?.value;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiAxios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default apiAxios;
