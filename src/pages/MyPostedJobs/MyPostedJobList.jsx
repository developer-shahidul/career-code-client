import { use } from "react";
import { Link } from "react-router";

//
const MyPostedJobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  console.log(jobs);

  return (
    <div>
      <h1>my posted job list : {jobs.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Count</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows  */}
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.jobTitle}</td>
                <td>{job.deadline}</td>
                <td>{job.application_count}</td>
                <td className="hover:underline">
                  <Link to={`/applications/${job._id}`}>View Applications</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobList;
