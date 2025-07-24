import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import { useNavigate } from "react-router-dom";

function SavedJobs() {
  const savedJobs = useSelector((state) => state.saved.savedJobs);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-6  bg-gradient-to-br from-indigo-200 via-purple to-yellow-200">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-600 transition">
        &larr; Back
      </button>

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {savedJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedJobs;
