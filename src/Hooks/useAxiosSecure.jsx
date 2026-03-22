import axios from "axios";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-lake.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const token = user?.accessToken;
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          await signOutUser();
          navigate("/signIn");
        }
        return Promise.reject(error);
      },
    );

    // cleanup: remove old interceptors on re-render
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
