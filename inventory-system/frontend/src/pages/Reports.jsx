import React, { useState } from "react";
import QRCode from "react-qr-code";

const Reports = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      id: 1,
      code: "DISC-001",
      description: 'Cutting Disc 4" 1mm',
      location: "Rack 3-Drawer 11",
      balance: 875,
      required: 100,
    },
    {
      id: 2,
      code: "DISC-002",
      description: 'Cutting Disc 4" 2.5mm',
      location: "Rack 3-Drawer 11",
      balance: 20,
      required: 50,
    },
    {
      id: 3,
      code: "DISC-003",
      description: 'Cutting Disc 7"',
      location: "Rack 3-Drawer 11",
      balance: 10,
      required: 10,
    },
    {
      id: 4,
      code: "DISC-004",
      description: 'Cutting Wheel 14"',
      location: "Rack 3-Drawer 11",
      balance: 0,
      required: 10,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered Data
  const filteredData = inventoryData.filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Analytics calculations
  const totalItems = inventoryData.length;
  const lowStockItems = inventoryData.filter(
    (item) => item.balance < item.required && item.balance > 0
  );
  const outOfStockItems = inventoryData.filter((item) => item.balance === 0);

  const handleShowQRCode = (item) => {
    setSelectedItem(item);
  };

  const handleCloseQRCode = () => {
    setSelectedItem(null);
  };

  const getStatus = (balance, required) => {
    if (balance === 0) return "Out of Stock";
    if (balance < required) return "Low Stock";
    return "In Stock";
  };

  const exportToCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Code,Description,Location,Balance,Required"].join(",") +
      "\n" +
      inventoryData
        .map((item) =>
          [item.code, item.description, item.location, item.balance, item.required].join(",")
        )
        .join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "inventory_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setFeedback("Exported to CSV successfully!");
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Inventory Report</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg border border-gray-300"
        />
      </div>

      {/* Analytics Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AnalyticsCard
          title="Total Items"
          value={totalItems}
          bgColor="bg-gray-200"
          textColor="text-gray-700"
        />
        <AnalyticsCard
          title="Low Stock"
          value={lowStockItems.length}
          bgColor="bg-orange-200"
          textColor="text-orange-700"
        />
        <AnalyticsCard
          title="Out of Stock"
          value={outOfStockItems.length}
          bgColor="bg-red-200"
          textColor="text-red-700"
        />
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-xs text-gray-600">
            <thead>
              <tr>
                <th className="border-b px-4 py-3 text-left">Item Code</th>
                <th className="border-b px-4 py-3 text-left">Description</th>
                <th className="border-b px-4 py-3 text-left">Location</th>
                <th className="border-b px-4 py-3 text-left">Balance</th>
                <th className="border-b px-4 py-3 text-left">Required</th>
                <th className="border-b px-4 py-3 text-left">Status</th>
                <th className="border-b px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="border-b px-4 py-2">{item.code}</td>
                  <td className="border-b px-4 py-2">{item.description}</td>
                  <td className="border-b px-4 py-2">{item.location}</td>
                  <td className="border-b px-4 py-2">{item.balance}</td>
                  <td className="border-b px-4 py-2">{item.required}</td>
                  <td className="border-b px-4 py-2">
                    <span
                      className={`font-semibold ${
                        item.balance === 0
                          ? "text-red-700"
                          : item.balance < item.required
                          ? "text-orange-700"
                          : "text-green-700"
                      }`}
                    >
                      {getStatus(item.balance, item.required)}
                    </span>
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                      onClick={() => handleShowQRCode(item)}
                    >
                      Show QR Code
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* QR Code Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold mb-4">QR Code for {selectedItem.code}</h2>
            <QRCode value={JSON.stringify(selectedItem)} />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm mt-4"
              onClick={handleCloseQRCode}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Export Section */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm"
          onClick={exportToCSV}
        >
          Export to CSV
        </button>
      </div>

      {/* Feedback */}
      {feedback && <p className="text-sm text-green-600 mt-2">{feedback}</p>}
    </div>
  );
};

const AnalyticsCard = ({ title, value, bgColor, textColor }) => (
  <div className={`p-4 rounded-lg shadow-md ${bgColor} ${textColor}`}>
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default Reports;
