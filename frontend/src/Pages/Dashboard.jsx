import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition duration-300">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </header>

      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 w-full max-w-7xl">
        <Link to="/inventory">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Inventory Management
                </h2>
                <p className="text-4xl font-extrabold text-blue-500">Lorem</p>
              </div>
              <div className="bg-red-400 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h4v4h-4v-4zm0-6h4v4h-4V9zm-6 6h4v4H7v-4zm0-6h4v4H7V9z" />
                </svg>
              </div>
            </div>
            <p className="text-green-500 text-sm mt-2">
              <span className="font-bold">↑ 5.6%</span> Lorem Ipsum
            </p>
            <div className="absolute top-3 right-3 bg-blue-100 p-1 rounded-md text-xs">
              Details
            </div>
          </div>
        </Link>

        <Link to="/check">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  In/Out Equipments
                </h2>
                <p className="text-4xl font-extrabold text-orange-400">Lorem</p>
              </div>
              <div className="bg-yellow-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
            </div>
            <p className="text-red-500 text-sm mt-2">
              <span className="font-bold">↓ 2.3%</span> Lorem Ipsum
            </p>
            <div className="absolute top-3 right-3 bg-yellow-100 p-1 rounded-md text-xs">
              Details
            </div>
          </div>
        </Link>

        <Link to="/reports">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Reports
                </h2>
                <p className="text-4xl font-extrabold text-pink-500">Lorem</p>
              </div>
              <div className="bg-pink-400 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 3h14v2H5zm4 16h6v-2H9zM3 7h18v10H3z" />
                </svg>
              </div>
            </div>
            <p className="text-orange-500 text-sm mt-2">
              <span className="font-bold">↑ 3.7%</span> Lorem Ipsum
            </p>
            <div className="absolute top-3 right-3 bg-pink-100 p-1 rounded-md text-xs">
              Details
            </div>
          </div>
        </Link>

        <Link to="/user-management">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  User Management
                </h2>
                <p className="text-4xl font-extrabold text-green-500">Lorem</p>
              </div>
              <div className="bg-green-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.313 0-10 1.671-10 5v2h20v-2c0-3.329-6.687-5-10-5z" />
                </svg>
              </div>
            </div>
            <p className="text-blue-500 text-sm mt-2">
              <span className="font-bold">↑ 4.2%</span> Lorem Ipsum
            </p>
            <div className="absolute top-3 right-3 bg-green-100 p-1 rounded-md text-xs">
              Details
            </div>
          </div>
        </Link>

        <Link to="/setting">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 relative">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Settings
                </h2>
                <p className="text-4xl font-extrabold text-blue-400">Lorem</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c1.104 0 2 .896 2 2v2h4c1.104 0 2 .896 2 2v2c0 1.104-.896 2-2 2h-4v2c0 1.104-.896 2-2 2s-2-.896-2-2v-2h-4c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h4V4c0-1.104.896-2 2-2z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              <span className="font-bold">No Changes</span> Lorem Ipsum
            </p>
            <div className="absolute top-3 right-3 bg-blue-100 p-1 rounded-md text-xs">
              Details
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
