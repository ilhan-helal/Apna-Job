import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup({ setLoggedin, setUserName }) {
  const navigate = useNavigate();

  function formSubmit(e) {
    e.preventDefault();
    const toastId = toast.loading("Signing you in...");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = existingUsers.find((user) => user.email === email);
    setTimeout(() => {
    if (alreadyExists) {
      toast.dismiss(toastId);
      toast.error("User already exists! Please log in.");
      navigate("/login");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.dismiss(toastId);
    setUserName(name);
    setLoggedin(true);
    toast.success("Signup Successful");
    navigate("/profile");
     },2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/20 max-w-md w-full p-8 rounded-2xl shadow-2xl">
        
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center tracking-tight">Join AamJob</h1>
        <p className="text-gray-600 mb-6 text-center text-sm">Create your free account to get started</p>

        <form onSubmit={formSubmit} className="space-y-5">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white/70 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
              title="Must be a valid Gmail address (e.g., user@gmail.com)"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white/70 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$"
              title="Must contain at least one number and one special character"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white/70 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
