import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard';
import { Link } from 'react-router-dom';

function Profile() {
  const [jobs, setJobs] = useState([]);
  const [searchJob, setSearchJob] = useState("");
  const [sorts, setSorts] = useState('Sort');

  useEffect(()=>{
  async function fetchJobs() {
    try {
      const response = await fetch("https://www.arbeitnow.com/api/job-board-api");
      const data = await response.json()
      setJobs(data.data);
      
    } catch (error) {
      console.error("Failed to fetch jobs:", error)
    }
  }
    fetchJobs()
    }, []);
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple to-yellow-200 px-4 py-6 overflow-x-hidden">

        <div className="w-full px-4 mb-10 space-y-4">
  {/* Top Row: Sort and View Saved */}
  <div className="flex items-center justify-between flex-wrap gap-4">
    {/* Sort Dropdown */}
    <select
      value={sorts}
      onChange={(e) => setSorts(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="Sort" disabled>Sort by date</option>
      <option value="latest">Latest First</option>
      <option value="oldest">Oldest First</option>
    </select>

    {/* View Saved Button */}
    <Link to="/saved">
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">
      Saved Jobs ⭐
      </button>
    </Link>
  </div>

  {/* Second Row: Search Input */}
  <div className="flex justify-center w-full">
    <input
      type="text"
      placeholder="What job are you looking for? 🔍"
      value={searchJob}
      onChange={(e) => setSearchJob(e.target.value)}
      className="w-full md:max-w-md px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>





        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobs.filter((job)=> job.title.toLowerCase().includes(searchJob.toLowerCase())).length === 0 ? (
          <p className="text-center text-gray-500">No matching jobs found.</p>) : 
          (jobs.filter((job) =>job.title.toLowerCase().includes(searchJob.toLowerCase())
          ).sort((a, b) => {
                  const dateA = new Date(a.created_at);
                  const dateB = new Date(b.created_at);
                  return sorts === "latest" ? dateB - dateA : dateA - dateB;
                }).map((job, index) => (<JobCard key={index} job={job} />))
          )} 
        </div>
    </div>
    </div>
  )
}

export default Profile