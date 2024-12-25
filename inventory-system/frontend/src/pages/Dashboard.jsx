import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [inventoryStats, setInventoryStats] = useState({
    totalItems: 150,
    activeProjects: 12,
    lowStockItems: 25,
    pendingMaintenance: 8,
  });
  const [recentActivities, setRecentActivities] = useState([
    { activity: "Checked out equipment for Project A", time: "2 hours ago" },
    { activity: "Updated maintenance schedule for Site B", time: "Yesterday" },
    { activity: "Added new drainage data for Region C", time: "2 days ago" },
  ]);

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
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">

      {/* Summary Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 text-gray-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Total Inventory Items</p>
            <p className="text-xl font-bold">{inventoryStats.totalItems}</p>
          </div>
          <div className="bg-green-200 text-green-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Active Projects</p>
            <p className="text-xl font-bold">{inventoryStats.activeProjects}</p>
          </div>
          <div className="bg-orange-200 text-orange-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Low Stock Items</p>
            <p className="text-xl font-bold">{inventoryStats.lowStockItems}</p>
          </div>
          <div className="bg-red-200 text-red-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Pending Maintenance</p>
            <p className="text-xl font-bold">
              {inventoryStats.pendingMaintenance}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <ul className="divide-y divide-gray-200">
          {recentActivities.map((activity, index) => (
            <li key={index} className="flex justify-between items-center py-2">
              <span>{activity.activity}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
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
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
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
      </div>

      {/* Inventory Chart (Placeholder for now) */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Inventory Overview
        </h2>
        <div className="flex justify-center items-center h-40 bg-gray-50 border border-gray-200 rounded-lg">
          <span className="text-gray-400">Chart Placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
