import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../Hooks/UseAuth";
import { myApplicationPromise } from "../../Api/ApplicationApi";

const MyApplications = () => {
  const { user, loading } = UseAuth();

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
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
            <p className="mt-4 text-xl text-gray-600">Loading Hot Jobs...</p>
          </div>
        }
      >
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user?.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
