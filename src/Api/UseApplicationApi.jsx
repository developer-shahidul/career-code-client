import UseAxiosSecore from "../Hooks/UseAxiosSecore";

const UseApplicationApi = () => {
  const axiosSecore = UseAxiosSecore();
  const myApplicationPromise = (email) => {
    return axiosSecore
      .get(`applications/applicant?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myApplicationPromise,
  };
};

export default UseApplicationApi;
