import { use } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  //   console.log(jobs?.length);
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="mb-2.5 text-4xl font-bold">Jobs of the day</h2>
        <p className="text-lg font-semibold text-black/60">
          Search and connect with the right candidates faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {jobs.map((jobs) => (
          <JobsCard key={jobs._id} jobs={jobs}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
