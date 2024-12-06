import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Inventory data, you might replace this with actual data from an API
  const [inventory] = useState([
    {
      id: 1,
      name: "Welding Machine",
      code: "WM001",
      category: "Welding Machine",
      quantity: 10,
      status: "Available",
      lastUpdated: "2024-12-04",
      remarks: "In good condition",
      qr: "https://via.placeholder.com/100", // Placeholder for QR code image
    },
    {
      id: 2,
      name: "Drill Machine",
      code: "DM001",
      category: "Power Tools",
      quantity: 5,
      status: "Out of Stock",
      lastUpdated: "2024-12-01",
      remarks: "Needs repair",
      qr: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Cement Mixer",
      code: "CM001",
      category: "Construction",
      quantity: 2,
      status: "Available",
      lastUpdated: "2024-12-03",
      remarks: "In good condition",
      qr: "https://via.placeholder.com/100",
    },
  ]);

  // Search term for filtering the inventory list
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  // Filter the inventory based on the search term
  const filteredInventory = inventory.filter(
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Case insensitive search
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#800020] mb-4 transition-all duration-300 transform hover:scale-105">
          Welcome to the Equipment Management System
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-600">
          Manage your tools and equipment easily. Stay organized and efficient
          with just a few clicks.
        </p>
      </div>

      {/* Search Bar for filtering inventory */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearchChange} // Update search term on input change
          className="border border-gray-300 p-4 rounded-lg w-full sm:w-1/2 lg:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-[#800020] transition-all duration-300"
        />
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-[#800020] mb-6">
          Equipment Inventory
        </h2>
        <table className="min-w-full table-auto text-sm">
          <thead className="text-[#800020]">
            <tr>
              <th className="py-2 px-4 border-b">Product Name (Code #)</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">QR</th>
              <th className="py-2 px-4 border-b">Last Updated</th>
              <th className="py-2 px-4 border-b">Remarks</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* Map over filtered inventory items */}
            {filteredInventory.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{`${product.name} (${product.code})`}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">{product.quantity}</td>
                <td className="py-2 px-4 border-b">{product.status}</td>
                <td className="py-2 px-4 border-b">
                  <img src={product.qr} alt="QR Code" className="w-12 h-12" />
                </td>
                <td className="py-2 px-4 border-b">{product.lastUpdated}</td>
                <td className="py-2 px-4 border-b">{product.remarks}</td>
                <td className="py-2 px-4 border-b">
                  {/* View details link */}
                  <Link
                    to={`/check/${product.code}`} // Redirect to check page using product code
                    className="text-[#800020] hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* About the Company Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-semibold text-[#800020] mb-6">
          About YAR Drainage Maintenance Services
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          YAR Drainage Maintenance Services is located at EL RICH LAND COMPOUND,
          National Highway Soro Soro Karsada Batangas City. We specialize in
          providing solutions for drain problems in both commercial and
          industrial companies. Together with our expert team and Engineering
          Department, YAR ensures excellent performance for both large and small
          companies.
        </p>
        <p className="text-lg text-gray-600 mb-4">Our services include:</p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>General Cleaning</li>
          <li>De-clogging</li>
          <li>Exhaust Cleaning</li>
          <li>Re-piping</li>
          <li>Re-tiling</li>
          <li>Online Pipe Repair</li>
          <li>Descaling</li>
          <li>Chimney Cleaning</li>
          <li>AHU Cleaning</li>
          <li>Water Treatment</li>
          <li>Waste Water Treatment</li>
          <li>Drain Treatment</li>
        </ul>
        <p className="text-lg text-gray-600">
          YAR is a single proprietorship with a growing team of 30 employees.
          Our goal is to exceed customer expectations, increase our client base
          through exceptional services, and build a sustainable business with
          profitable contracts and services.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
