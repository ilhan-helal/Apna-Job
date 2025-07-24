import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <div className="min-h-screen px-6 py-9 relative overflow-hidden bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      {/* Hero Section */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 mb-6 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TRUSTED BY 10,000+ JOB SEEKERS
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight h1-spin">
  Land Your Dream Job, <br className="hidden sm:block" />
  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 show-after-h1">
    Effortlessly
    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-underline"></span>
  </span>
</h1>


        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
          AamJob is India's most trusted job platform helping candidates connect with top companies.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
  <Link to="/login" className="w-full md:w-auto">
    <button className="relative group w-full md:w-auto px-6 md:px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="inline-block group-hover:pr-2 transition-all duration-300">
          Get Started For Free
        </span>
        <span className="inline-block transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-2">
          🚀
        </span>
      </span>
      {/* Plane background layer on hover */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  </Link>

  <button className="w-full md:w-auto px-6 md:px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-xl text-base md:text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
    How It Works
  </button>
</div>


        
      </div>

      {/* Scrolling Company Logos - Modern Version */}
      <div className="relative mt-20 max-w-7xl mx-auto">
  {/* Gradient fade effects on sides */}
  <div className="absolute inset-y-0 z-10"></div>
  <div className="absolute inset-y-0 z-10"></div>
  
  <div className="relative overflow-hidden">
    <div className="flex animate-infinite-scroll-sm sm:animate-infinite-scroll-lg gap-8 py-6 flex-nowrap whitespace-nowrap">
      {/* First set of companies */}
      <div className="flex-shrink-0 flex gap-8">
        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" alt="Google" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.meta.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 object-contain" />
        </a>

        <a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png" alt="IBM" className="h-8 object-contain" />
         </a>

        <a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png" alt="Samsung" className="h-8 object-contain" />
         </a>

        <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png" alt="Nvidia" className="h-8 object-contain" />
         </a>

        <a href="https://www.adobe.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png" alt="Adobe" className="h-8 object-contain" />
         </a>


        <a href="https://www.oracle.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png" alt="Oracle" className="h-8 object-contain" />
         </a>

      </div>
      
      {/* Second set (duplicate for seamless looping) */}
      <div className="flex-shrink-0 flex gap-8">
        <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png" alt="Google" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.meta.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" className="h-8 object-contain" />
        </a>
        
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 object-contain" />
        </a>

       <a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png" alt="Samsung" className="h-8 object-contain" />
        </a>

       <a href="https://www.nvidia.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png" alt="Nvidia" className="h-8 object-contain" />
        </a>

       <a href="https://www.adobe.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png" alt="Adobe" className="h-8 object-contain" />
        </a>

       <a href="https://www.oracle.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border hover:border-blue-100">
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png" alt="Oracle" className="h-8 object-contain" />
        </a>
        
      </div>
    </div>
  </div>
</div>

      {/* Statistics with Animated Counters */}
      <div className="relative mt-24 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <p className="text-5xl font-bold text-blue-600 mb-2">
            <span className="counter" data-target="50">25</span>K+
          </p>
          <p className="text-gray-600 font-medium">Jobs Posted</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <p className="text-5xl font-bold text-blue-600 mb-2">
            <span className="counter" data-target="95">95</span>%
          </p>
          <p className="text-gray-600 font-medium">User Satisfaction</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <p className="text-5xl font-bold text-blue-600 mb-2">
            <span className="counter" data-target="10">10</span>K+
          </p>
          <p className="text-gray-600 font-medium">Active Users</p>
        </div>
      </div>

      {/* Floating Get Started Button for Mobile */}
      <div className="fixed sm:hidden bottom-6 right-6 z-50">
        <Link to="/login">
          <button className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
            <span className="text-2xl">🚀</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;