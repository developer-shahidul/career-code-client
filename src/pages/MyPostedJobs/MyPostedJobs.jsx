import { Suspense, use } from "react";
import { AuthContext } from "../../Contexts/AuthContexts/AuthContext";
import MyPostedJobList from "./myPostedJobList";
// import { jobsCreatedByPromise } from "../../Api/JobApi";
import UseJobApi from "../../Api/UseJobApi";

const MyPostedJobs = () => {
  const { user } = use(AuthContext);
  // console.log("firebase token", user.accessToken);

  const { jobsCreatedByPromise } = UseJobApi();
  return (
    <div>
      <h1>My posted Jobs</h1>
      <Suspense>
        <MyPostedJobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></MyPostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
