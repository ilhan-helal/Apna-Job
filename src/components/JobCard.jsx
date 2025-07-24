import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/savedSlice";

function JobCard({ job }) {
  const dispatch = useDispatch();

  // check if this job is already saved
  const isSaved = useSelector((state) =>
    state.saved.savedJobs.some((j) => j.slug === job.slug)
  );

  // save handler
  const handleSave = () => {
    if (isSaved) {
      dispatch(remove(job.slug));
    }
    else
      dispatch(add(job));
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-6 mb-8 w-full max-w-2xl mx-auto border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Header: Job Title + Badge */}
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold text-sky-800">{job.title}</h2>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          Hiring
        </span>
      </div>

      {/* Sub-info */}
      <div className="mt-2 text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">Company:</span> {job.company_name}
        </p>
        <p>
          <span className="font-medium">Location:</span> {job.location || "Remote"}
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200"></div>

      {/* Action buttons */}
      <div className="flex justify-between items-center">
        {/* Left: Apply button */}
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-green-700 text-white px-5 py-2.5 text-sm font-semibold rounded-lg transition duration-300"
        >
          Apply Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Right: Save Job */}
        <button
          type="button"
          onClick={handleSave}
          className={`text-sm flex items-center gap-1 transition duration-300 
          ${isSaved ? "bg-indigo-600 text-white px-3 py-1 rounded" : "text-gray-500 hover:text-indigo-800"}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
            />
          </svg>
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;