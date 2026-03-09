import { Suspense, useState, useEffect } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../Hooks/UseAuth";
// import { myApplicationPromise } from "../../Api/ApplicationApi";
import UseApplicationApi from "../../Api/UseApplicationApi";

const MyApplications = () => {
  const { user, loading } = UseAuth();

  // console.log("firebase token", user.accessToken);

  const { myApplicationPromise } = UseApplicationApi();
  const [promise, setPromise] = useState(null);

  useEffect(() => {
    if (user?.email) {
      setPromise(myApplicationPromise(user.email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <ApplicationStats></ApplicationStats>
      {promise ? (
        <Suspense
          fallback={
            <div className="py-20 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
              <p className="mt-4 text-xl text-gray-600">Loading Hot Jobs...</p>
            </div>
          }
        >
          <ApplicationList
            myApplicationPromise={promise}
          ></ApplicationList>
        </Suspense>
      ) : (
        <div className="py-20 text-center">
          <span className="loading loading-ring loading-xl"></span>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
