import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SavedJobs from './pages/SavedJobs';

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />

      <Navbar loggedin={loggedin} setLoggedin={setLoggedin} userName={userName} />
      <div>
        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route path="/profile"  element={loggedin ? <Profile userName={userName} /> : <Navigate to="/" />}/>
          <Route path="/login" element={<Login setLoggedin={setLoggedin} setUserName={setUserName} />} />
          <Route path="/signup" element={<Signup setLoggedin={setLoggedin} setUserName={setUserName} />} />
          <Route path="/saved" element={<SavedJobs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
