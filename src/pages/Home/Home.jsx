import Banner from "./Banner";
import JobCategoriesCarousel from "./JobCategoriesCarousel";
import HotJobs from "./HotJobs";
import { Suspense } from "react";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json()
  );
  return (
    <div>
      <Banner></Banner>
      <JobCategoriesCarousel></JobCategoriesCarousel>

      {/* Suspense দিয়ে HotJobs লোড করো */}
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
            <p className="mt-4 text-xl text-gray-600">Loading Hot Jobs...</p>
          </div>
        }
      >
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
