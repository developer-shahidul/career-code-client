import axios from "axios";
import { use } from "react";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const UseAxiosSecore = () => {
  const { user, signOutUser } = use(AuthContext);

  // // Add a request interceptor
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            console.log("signOut user for 401/403 user code");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(error);
    },
  );

  console.log(user);
  return axiosInstance;
};

export default UseAxiosSecore;
