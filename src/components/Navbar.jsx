import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar({ loggedin, setLoggedin, userName, setUserName }) {
      const navigate = useNavigate();
  return (
    <>
    <nav className="bg-white shadow-lg py-3 px-4 sm:px-8 flex justify-between items-center sticky top-0 z-50">
  {/* Brand - AamJob */}
  <div className="flex-shrink-1 max-w-[120px] sm:max-w-none">
    <h1 className="text-[20px] sm:text-3xl font-extrabold text-blue-600 cursor-pointer select-none whitespace-nowrap">AamJob🪢
    </h1>
  </div>

  {/* Buttons */}
<div className="flex-shrink-0 flex items-center space-x-3">
  {!loggedin ? (
    <>
      <Link to="/" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 whitespace-nowrap text-sm sm:text-sm lg:text-base">
        Home
      </Link>
      <Link to="/login">
        <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-200 transition duration-300 whitespace-nowrap">
          Log In
        </button>
      </Link>
      <Link to="/signup">
        <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap">
          Sign Up
        </button>
      </Link>
    </>
  ) : (
    <>
    <div className="items-start lg:mr-122  leading-tight  md:flex flex-row">
  <p className="text-sm sm:text-base text-gray-700 font-medium">Hey👋</p>
 <p className="text-sm sm:text-base font-semibold text-blue-600 truncate max-w-[100px]">
  {userName.length > 6
    ? userName.charAt(0).toUpperCase() + userName.slice(1, 6).toLowerCase() + "..."
    : userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()}
</p>
</div>
      <Link to="/profile">
        <button className="px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base font-medium text-gray-700 border border-gray-400 rounded-lg bg-gray-300 transition duration-300 whitespace-nowrap">
          Profile
        </button>
      </Link>
      <button
        onClick={() => {
          const toastId = toast.loading("Logging you out...");
          setTimeout(() => {
            toast.dismiss(toastId);
            toast.success("🔒Session ended. Logged out safely");
            setLoggedin(false);
            setUserName("");
            navigate("/");
          }, 2000);
        }}
        className="px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-sm lg:px-5 lg:py-2.5 lg:text-base font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-100 transition duration-300 whitespace-nowrap"
      >
        Log Out
      </button>
    </>
  )}
</div>

</nav>

    </>
  );
}

export default Navbar;
