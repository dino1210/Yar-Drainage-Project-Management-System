import React, { useState, useEffect } from "react";
import { FaUsers, FaTag, FaBox, FaShoppingCart, FaFileAlt, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation

// Mock Data Fetch Function (replace with your API later)
const fetchDashboardData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        totalUsers: 50,
        totalCategories: 8,
        totalProducts: 120,
        totalSales: 1500,
        lowStock: [{ product_name: "Cement Mixer", stocks: 2 }],
        recentActivities: [
          {
            description: "Added new product: Drill Machine",
            timestamp: Date.now() - 3600000,
          },
          {
            description: "Updated stock for Welding Machine",
            timestamp: Date.now() - 7200000,
          },
        ],
      });
    }, 1000)
  );
};

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDashboardData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const {
    totalUsers,
    totalCategories,
    totalProducts,
    totalSales,
    lowStock = [],
    recentActivities = [],
  } = data;

  return (
    <div className="space-y-8 px-7  md:px-8">
      <div className="flex flex-col gap-8">
        {/* Metrics Section */}
        <MetricsSection
          metrics={[
            {
              label: "Inventory Management",
              value: totalUsers,
              icon: (
                <Link to="/inventory-management">
                  <FaBox className="text-blue-500 text-5xl cursor-pointer hover:text-blue-700 transition-all" />
                </Link>
              ),
            },
            {
              label: "Check-In/Check-Out",
              value: totalCategories,
              icon: (
                <Link to="/check-in-out">
                  <FaTag className="text-green-500 text-5xl cursor-pointer hover:text-green-700 transition-all" />
                </Link>
              ),
            },
            {
              label: "User Management",
              value: totalProducts,
              icon: (
                <Link to="/user-management">
                  <FaUsers className="text-yellow-500 text-5xl cursor-pointer hover:text-yellow-700 transition-all" />
                </Link>
              ),
            },
           
            {
              label: "Reports",
              value: "N/A", // You can update this if reports data is available
              icon: (
                <Link to="/reports">
                  <FaFileAlt className="text-purple-500 text-5xl cursor-pointer hover:text-purple-700 transition-all" />
                </Link>
              ),
            },
          ]}
        />

        {/* Low Stock Alerts */}
        <LowStockAlerts lowStock={lowStock} />

        {/* Recent Activity */}
        <RecentActivity activities={recentActivities} />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

// Metrics Section: Displays the top metrics like Inventory Management, Check-In/Check-Out, User Management, Settings
const MetricsSection = ({ metrics }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
    {metrics.map((metric, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center gap-4"
      >
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-gray-600 font-semibold">{metric.label}</h3>
          <p className="text-xl font-semibold">{metric.value}</p>
        </div>
        <div className="flex justify-center">{metric.icon}</div>
      </div>
    ))}
  </div>
);

// Low Stock Alerts: Shows a list of low stock items
const LowStockAlerts = ({ lowStock }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold mb-4 text-gray-600">Low Stock Alerts</h3>
    {lowStock.length > 0 ? (
      <ul className="space-y-2">
        {lowStock.map((product, index) => (
          <li key={index} className="text-sm text-gray-700">
            <span>{product.product_name}</span> (Stock: {product.stocks})
          </li>
        ))}
      </ul>
    ) : (
      <p>No low stock products</p>
    )}
  </div>
);

// Recent Activity: Displays a list of recent actions
const RecentActivity = ({ activities }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold mb-4 text-gray-600">Recent Activity</h3>
    {activities.length > 0 ? (
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-sm text-gray-700">
            {activity.description}{" "}
            <span className="text-gray-500">
              ({new Date(activity.timestamp).toLocaleString()})
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <p>No recent activity</p>
    )}
  </div>
);

// Footer Component
const Footer = () => (
  <div className="bg-[#800020] text-white text-center py-6 mt-12">
    <p className="text-sm">
      © 2024 YAR Drainage Maintenance Services. All Rights Reserved.
    </p>
    <div>
      <Link to="/terms" className="text-white hover:underline text-sm">
        Terms of Service
      </Link>{" "}
      |{" "}
      <Link to="/privacy" className="text-white hover:underline text-sm">
        Privacy Policy
      </Link>
    </div>
  </div>
);

export default Dashboard;
