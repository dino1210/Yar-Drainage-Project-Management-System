import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Example fetching alerts (replace with real API call)
    const fetchAlerts = async () => {
      const data = [
        { message: "Low inventory on Drainage System A", type: "warning" },
        { message: "Maintenance overdue for Site C", type: "error" },
      ];
      setAlerts(data);
    };
    fetchAlerts();
  }, []);

  return (
    <div className="flex flex-col p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-6 shadow-sm rounded-lg">
        <div className="flex space-x-4">
        </div>
      </header>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-sm rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">
            Total Drainage Systems
          </h2>
          <p className="text-2xl font-semibold text-blue-600">150</p>
        </div>
        <div className="bg-white p-6 shadow-sm rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">Active Projects</h2>
          <p className="text-2xl font-semibold text-green-600">12</p>
        </div>
        <div className="bg-white p-6 shadow-sm rounded-lg">
          <h2 className="text-sm font-medium text-gray-500">
            Pending Maintenance
          </h2>
          <p className="text-2xl font-semibold text-red-600">8</p>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="bg-white p-6 shadow-sm rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <ul className="divide-y divide-gray-200">
          <li className="flex justify-between items-center py-2">
            <span>Checked out equipment for Project A</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Updated maintenance schedule for Site B</span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Added new drainage data for Region C</span>
            <span className="text-sm text-gray-500">2 days ago</span>
          </li>
        </ul>
      </section>

      {/* Alerts Section */}
      <section className="bg-white p-6 shadow-sm rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Notifications
        </h2>
        <ul className="space-y-2">
          {alerts.map((alert, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg text-sm font-medium ${
                alert.type === "error"
                  ? "bg-red-50 text-red-700"
                  : "bg-yellow-50 text-yellow-700"
              }`}
            >
              {alert.message}
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="bg-white p-6 shadow-sm rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add Equipment
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Schedule Maintenance
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Generate Report
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Alert Issue
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
