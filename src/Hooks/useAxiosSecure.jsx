import axios from "axios";
import { useEffect } from "react";
import { use } from "react";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-grd1ju1tj-shaidul-portfollio.vercel.app",
  // withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("career-code-token");
        // console.log('request stopped by interceptor', token)
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    // interrupts 401 & 403 status
    const responseInterceptor = axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error.response ? error.response.status : null;
        console.log("status error in the interceptor", status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
          await signOutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, signOutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
