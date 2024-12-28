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

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Inventory Report
      </h1>

      {/* Analytics Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 text-gray-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Total Items</p>
            <p className="text-xl font-bold">{totalItems}</p>
          </div>
          <div className="bg-orange-200 text-orange-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Low Stock</p>
            <p className="text-xl font-bold">{lowStockItems.length}</p>
          </div>
          <div className="bg-red-200 text-red-700 p-4 rounded-lg shadow-md">
            <p className="text-sm font-semibold">Out of Stock</p>
            <p className="text-xl font-bold">{outOfStockItems.length}</p>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg p-4 shadow-md">
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
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td className="border-b px-4 py-2">{item.code}</td>
                <td className="border-b px-4 py-2">{item.description}</td>
                <td className="border-b px-4 py-2">{item.location}</td>
                <td className="border-b px-4 py-2">{item.balance}</td>
                <td className="border-b px-4 py-2">{item.required}</td>
                <td className="border-b px-4 py-2">
                  {item.balance === 0 ? (
                    <span className="text-red-700 font-semibold">
                      Out of Stock
                    </span>
                  ) : item.balance < item.required ? (
                    <span className="text-orange-700 font-semibold">
                      Low Stock
                    </span>
                  ) : (
                    <span className="text-green-700 font-semibold">
                      In Stock
                    </span>
                  )}
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

      {/* QR Code Modal */}
      {selectedItem && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">
            QR Code for {selectedItem.code}
          </h2>
          <QRCode value={JSON.stringify(selectedItem)} />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm mt-4"
            onClick={handleCloseQRCode}
          >
            Close
          </button>
        </div>
      )}

      {/* Export Section */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm"
          onClick={() => alert("Exporting to CSV...")}
        >
          Export to CSV
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          onClick={() => alert("Exporting to PDF...")}
        >
          Export to PDF
        </button>
      </div>
    </div>
  );
};

export default Reports;
