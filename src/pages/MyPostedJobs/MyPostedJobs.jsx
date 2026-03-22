import { Suspense, use } from "react";
import { AuthContext } from "../../Contexts/AuthContexts/AuthContext";
import MyPostedJobList from "./MyPostedJobList";
// import { jobsCreatedByPromise } from "../../Api/JobApi";
import UseJobApi from "../../Api/UseJobApi";

const MyPostedJobs = () => {
  const { user } = use(AuthContext);
  // console.log("firebase token", user.accessToken);

  const { jobsCreatedByPromise } = UseJobApi();
  return (
    <div>
      <h1>My posted Jobs</h1>
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <div className="inline-block h-12 w-12 border-t-4 rounded-full animate-spin border-blue-600 border-solid "></div>
            <p className="mt-4 text-xl text-gray-600">Loading My Jobs...</p>
          </div>
        }
      >
        <MyPostedJobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></MyPostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
