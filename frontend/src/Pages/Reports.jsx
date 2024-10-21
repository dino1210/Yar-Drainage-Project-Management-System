import React, { useState } from "react";

const Reports = () => {
  const [salesReport, setSalesReport] = useState("");
  const [equipmentReport, setEquipmentReport] = useState("");
  const [projectReport, setProjectReport] = useState("");

  const handleSubmit = () => {
    if (salesReport && equipmentReport && projectReport) {
      alert("Reports submitted successfully!");
      resetFields();
    } else {
      alert("Please fill out all report sections before submitting.");
    }
  };

  const resetFields = () => {
    setSalesReport("");
    setEquipmentReport("");
    setProjectReport("");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 text-center mb-6">
          YAR SYSTEM Reports
        </h1>

        {/* Form */}
        <div className="space-y-6">
          {/* Sales Report Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Sales Report
            </h2>
            <input
              type="text"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter sales report details..."
              value={salesReport}
              onChange={(e) => setSalesReport(e.target.value)}
            />
          </div>

          {/* Equipment Report Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Equipment Report
            </h2>
            <input
              type="text"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter equipment report details..."
              value={equipmentReport}
              onChange={(e) => setEquipmentReport(e.target.value)}
            />
          </div>

          {/* Project Report Section */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              Project Report
            </h2>
            <input
              type="text"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Enter project report details..."
              value={projectReport}
              onChange={(e) => setProjectReport(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button
            className="bg-blue-500 text-white w-full sm:w-auto px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Submit Reports
          </button>
          <button
            className="bg-gray-400 text-white w-full sm:w-auto px-6 py-2 rounded-lg shadow hover:bg-gray-500 transition duration-300"
            onClick={resetFields}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
