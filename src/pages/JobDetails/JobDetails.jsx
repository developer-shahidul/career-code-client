import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const jobsData = useLoaderData();
  console.log(jobsData);
  return <div></div>;
};

export default JobDetails;
