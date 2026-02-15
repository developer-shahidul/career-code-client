import useAxiosSecure from "../Hooks/useAxiosSecure";

const UseApplicationApi = () => {
  const axiosSecure = useAxiosSecure();
  const myApplicationPromise = (email) => {
    return axiosSecure
      .get(`/applications/applicant?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myApplicationPromise,
  };
};

export default UseApplicationApi;
