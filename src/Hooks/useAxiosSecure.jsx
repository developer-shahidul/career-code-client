import axios from "axios";
import { AuthContext } from "../Contexts/AuthContexts/AuthContext";
import { useNavigate } from "react-router";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "https://career-code-server-lake.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser, user } = UseAuth();
  const navigate = useNavigate();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // interrupts 401 & 403 status
  axiosInstance.interceptors.response.use(
    (response) => {
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

  return axiosInstance;
};

export default useAxiosSecure;
