import { Link, useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  console.log("apply parameter", jobId);
  const { user } = UseAuth();
  // console.log("user informatin", user);

  const handleApplySubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const github = from.github.value;
    const linkedIn = from.linkedIn.value;
    const resume = from.resume.value;
    const application = {
      jobId,
      applicant: user.email,
      github,
      linkedIn,
      resume,
    };

    axios
      .post(
        "https://career-code-server-lake.vercel.app//applications",
        application,
      )
      .then((result) => {
        console.log(result);
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submited",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3 className="text-3xl py-5">
        Apply for this job :{" "}
        <Link to={`/jobs/${jobId}`} className="hover:cursor-pointer font-bold">
          Details
        </Link>
      </h3>

      <form onSubmit={handleApplySubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label ">GitHub Link</label>
          <input
            type="url"
            className="input"
            name="github"
            required
            placeholder="https://github.com/..."
          />

          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            className="input"
            name="linkedIn"
            required
            placeholder="https://linkedIn.com/..."
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            className="input"
            name="resume"
            required
            placeholder="https://resume.com/..."
          />

          <input
            type="submit"
            className="btn btn-secondary btn-lg w-full"
            value="Submit"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
