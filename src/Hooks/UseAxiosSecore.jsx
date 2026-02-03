import axios from "axios";
import { use } from "react";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const UseAxiosSecore = () => {
  const { user } = use(AuthContext);

  // axios request interceptor
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  console.log(user);
  return axiosInstance;
};

export default UseAxiosSecore;
