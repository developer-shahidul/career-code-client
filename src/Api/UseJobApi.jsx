import UseAxiosSecore from "../Hooks/UseAxiosSecore";

const UseJobApi = () => {
  const axiosSecore = UseAxiosSecore();
  const jobsCreatedByPromise = (email) => {
    return axiosSecore
      .get(`/jobs/applications?email=${email}`)
      .then((res) => res.data);
  };
  return { jobsCreatedByPromise };
};

export default UseJobApi;
