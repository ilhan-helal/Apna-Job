import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login({ setLoggedin, setUserName }) {
  const navigate = useNavigate();

  function formSubmit(event) {
    event.preventDefault();
    const toastId = toast.loading("Logging you in...");
    const email = event.target.email.value;
    const password = event.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((user) => user.email === email && user.password === password);
    setTimeout(() => {
    if (!foundUser) {
      toast.dismiss(toastId);
      toast.error("Incorrect credentials or user doesn't exist. Please sign up first.");
      return;
    }
     toast.dismiss(toastId);
    setLoggedin(true);
    toast.success("Logged in Successfully");
    setUserName(foundUser.name);
    navigate("/profile");
    },2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 px-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/20 max-w-md w-full p-8 rounded-2xl shadow-2xl">
        
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center tracking-tight">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-6 text-center text-sm">
          Please login to your account
        </p>

        <form onSubmit={formSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white/70 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
