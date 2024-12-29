import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      if (username === "admin" && password === "password") {
        onLoginSuccess();
        alert("Login successful!");
      } else {
        alert("Invalid username or password!");
      }
    } else {
      // Signup logic
      alert("Signup successful! Please log in.");
      setIsLogin(true); // Redirect to login after signup
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('src/assets/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* Title Section */}
      <div className="w-1/3 text-white text-center">
        <h1 className="text-7xl font-bold">Yardrainage</h1>
        <p className="text-3xl mt-4">Maintenance and Services</p>
      </div>

      {/* Login/Signup Form */}
      <div className="w-1/3 max-w-md p-8 bg-white rounded-lg shadow-lg ml-16">
        <div className="flex flex-col items-center">
          {/* Company Logo */}
          <img
            src="src/assets/images/logo.png" // Ensure this path is correct
            alt="Company Logo"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isLogin ? "Login" : "Signup"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-red-800 rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href="#"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Signup now" : "Login now"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
