import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaTag,
  FaBox,
  FaShoppingCart,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa"; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock Data Fetch Function (replace with your API later)
const fetchDashboardData = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        totalUsers: 50,
        totalCategories: 8,
        totalProducts: 120,
        totalSales: 1500,
        inventory: [
          { name: "Welding Machine", stock: 10, status: "Available" },
          { name: "Drill Machine", stock: 0, status: "Out of Stock" },
        ],
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then((fetchedData) => {
      setData(fetchedData);
      setLoading(false);
    });
  }, []);

  // Destructure the data for easier access
  const {
    totalUsers,
    totalCategories,
    totalProducts,
    totalSales,
    inventory = [],
    lowStock = [],
    recentActivities = [],
  } = data;

  const availableItems = inventory.filter(
    (item) => item.status === "Available"
  ).length;
  const outOfStockItems = inventory.filter(
    (item) => item.status === "Out of Stock"
  ).length;

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="space-y-6">
      {/* Metrics Section */}
      <MetricsSection
        metrics={[
          {
            label: "Users",
            value: totalUsers,
            icon: <FaUsers className="text-blue-500 text-4xl" />,
          },
          {
            label: "Categories",
            value: totalCategories,
            icon: <FaTag className="text-green-500 text-4xl" />,
          },
          {
            label: "Products",
            value: totalProducts,
            icon: <FaBox className="text-yellow-500 text-4xl" />,
          },
          {
            label: "Sales",
            value: `$${totalSales}`,
            icon: <FaShoppingCart className="text-red-500 text-4xl" />,
          },
        ]}
      />

      {/* Inventory Overview */}
      <InventoryOverview
        available={availableItems}
        outOfStock={outOfStockItems}
      />

      {/* Full Inventory Link */}
      <InventoryLink />

      {/* Inventory Chart */}
      <InventoryChart
        inventoryData={[
          { name: "Available", value: availableItems },
          { name: "Out of Stock", value: outOfStockItems },
        ]}
      />

      {/* Low Stock Alerts */}
      <LowStockAlerts lowStock={lowStock} />

      {/* Recent Activity */}
      <RecentActivity activities={recentActivities} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

/** Metrics Section: Displays the top metrics like Users, Categories, Products, Sales */
const MetricsSection = ({ metrics }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {metrics.map((metric, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
      >
        <div>
          <h3 className="text-sm text-gray-600 font-semibold">
            {metric.label}
          </h3>
          <p className="text-xl font-semibold">{metric.value}</p>
        </div>
        {metric.icon}
      </div>
    ))}
  </div>
);

/** Inventory Overview: Shows Available and Out of Stock items with icons */
const InventoryOverview = ({ available, outOfStock }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-600 font-semibold">Available</h3>
        <p className="text-xl font-semibold">{available}</p>
      </div>
      <FaCheckCircle className="text-green-500 text-4xl" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-600 font-semibold">Out of Stock</h3>
        <p className="text-xl font-semibold">{outOfStock}</p>
      </div>
      <FaExclamationTriangle className="text-red-500 text-4xl" />
    </div>
  </div>
);

/** Full Inventory Link: Redirects to the detailed inventory view */
const InventoryLink = () => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
    <h3 className="text-sm font-semibold mb-4 text-gray-600">
      View Full Equipment Inventory
    </h3>
    <a
      href="/check"
      className="bg-[#800020] text-white hover:bg-[#6b001e] rounded-lg px-6 py-3 text-xl font-semibold transition-all transform hover:scale-105 shadow-md"
    >
      Click here to view the full inventory
    </a>
  </div>
);

/** Inventory Chart: Displays inventory status as a line chart */
const InventoryChart = ({ inventoryData }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold mb-4 text-gray-600">
      Inventory Status Overview
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={inventoryData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

/** Low Stock Alerts: Shows a list of low stock items */
const LowStockAlerts = ({ lowStock }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold mb-4 text-gray-600">
      Low Stock Alerts
    </h3>
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

/** Recent Activity: Displays a list of recent actions */
const RecentActivity = ({ activities }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold mb-4 text-gray-600">
      Recent Activity
    </h3>
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

/** Footer Component */
const Footer = () => (
  <div className="bg-[#800020] text-white text-center py-4 mt-12">
    <p className="text-sm">
      © 2024 YAR Drainage Maintenance Services. All Rights Reserved.
    </p>
    <div>
      <a href="/terms" className="text-white hover:underline text-sm">
        Terms of Service
      </a>{" "}
      |{" "}
      <a href="/privacy" className="text-white hover:underline text-sm">
        Privacy Policy
      </a>
    </div>
  </div>
);

export default Dashboard;
