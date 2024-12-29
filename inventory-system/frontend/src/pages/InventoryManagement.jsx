import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react"; 
import { BrowserMultiFormatReader } from "@zxing/browser"; 
const InventoryManagement = () => {
  const initialData = [
    {
      itemCode: "DISC-001",
      description: 'Cutting Disc 4" 1mm',
      location: "Rack 3-Drawer 11",
      beginning: 1009,
      balance: 875,
      unit: "pcs",
      reqQty: 100,
      status: "In Use",
    },
    {
      itemCode: "DISC-002",
      description: 'Cutting Disc 4" 2.5mm',
      location: "Rack 3-Drawer 11",
      beginning: 618,
      balance: 598,
      unit: "pcs",
      reqQty: 20,
      status: "Under Maintenance",
    },
    {
      itemCode: "DISC-003",
      description: 'Cutting Disc 7"',
      location: "Rack 3-Drawer 11",
      beginning: 10,
      balance: 10,
      unit: "pcs",
      reqQty: 10,
      status: "Broken",
    },
    {
      itemCode: "DISC-004",
      description: 'Cutting Wheel 14"',
      location: "Rack 3-Drawer 11",
      beginning: 9,
      balance: 9,
      unit: "pcs",
      reqQty: 10,
      status: "In Use",
    },
    {
      itemCode: "DISC-005",
      description: 'Grinding Disc 4"',
      location: "Rack 3-Drawer 11",
      beginning: 145,
      balance: 252,
      unit: "pcs",
      reqQty: 50,
      status: "In Use",
    },
    {
      itemCode: "DISC-006",
      description: 'Grinding Disc 7"',
      location: "Rack 3-Drawer 11",
      beginning: 9,
      balance: 9,
      unit: "pcs",
      reqQty: 10,
      status: "Under Maintenance",
    },
    {
      itemCode: "DISC-007",
      description: 'Flap Disc 4"',
      location: "Rack 3-Drawer 11",
      beginning: 332,
      balance: 307,
      unit: "pcs",
      reqQty: 50,
      status: "In Use",
    },
  ];

  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [scannedItem, setScannedItem] = useState(null);
  const [showScanner, setShowScanner] = useState(false);
  const videoRef = useRef(null);

  const handleEdit = (index) => {
    const updatedDescription = prompt(
      "Enter new description:",
      data[index].description
    );
    if (updatedDescription) {
      const updatedData = [...data];
      updatedData[index].description = updatedDescription;
      setData(updatedData);
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
    }
  };

  const handleUpdateStatus = (index) => {
    const newStatus = prompt(
      "Enter new status (In Use, Under Maintenance, Broken):",
      data[index].status
    );
    if (newStatus) {
      const validStatuses = ["In Use", "Under Maintenance", "Broken"];
      if (!validStatuses.includes(newStatus)) {
        alert("Invalid status. Please enter a valid status.");
        return;
      }
      const updatedData = [...data];
      updatedData[index].status = newStatus;
      setData(updatedData);
    }
  };

  const handleShowQRCode = (item) => {
    setSelectedItem(item);
  };

  const handleCloseQRCode = () => {
    setSelectedItem(null);
  };

  const startScanner = async () => {
    setShowScanner(true);
    const codeReader = new BrowserMultiFormatReader();
    try {
      await codeReader.decodeFromVideoDevice(
        null,
        videoRef.current,
        (result, error) => {
          if (result) {
            const scannedData = JSON.parse(result.getText());
            const item = data.find((d) => d.itemCode === scannedData.itemCode);
            if (item) {
              setScannedItem(item);
              setShowScanner(false);
              codeReader.reset();
            } else {
              alert("Item not found in inventory.");
            }
          }
        }
      );
    } catch (error) {
      console.error("Error starting scanner: ", error);
    }
  };

  return (
    <div className="container mx-auto p-2 text-xs">
      <div className="bg-white rounded-lg p-2 shadow-md">
        <div className="mt-3 bg-white rounded-lg shadow-sm mx-auto p-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Inventory Management</h1>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs"
              onClick={startScanner}
            >
              Scan QR Code
            </button>
          </div>
          <table className="min-w-full table-auto text-xs text-gray-600">
            <thead>
              <tr>
                <th className="border-b px-4 py-2 text-left">Item Code</th>
                <th className="border-b px-4 py-2 text-left">Description</th>
                <th className="border-b px-4 py-2 text-left">Location</th>
                <th className="border-b px-4 py-2 text-left">Beginning</th>
                <th className="border-b px-4 py-2 text-left">Balance</th>
                <th className="border-b px-4 py-2 text-left">Unit</th>
                <th className="border-b px-4 py-2 text-left">
                  Required Quantity
                </th>
                <th className="border-b px-4 py-2 text-center">Status</th>
                <th className="border-b px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2">{item.itemCode}</td>
                  <td className="border-b px-4 py-2">{item.description}</td>
                  <td className="border-b px-4 py-2">{item.location}</td>
                  <td className="border-b px-4 py-2">{item.beginning}</td>
                  <td className="border-b px-4 py-2">{item.balance}</td>
                  <td className="border-b px-4 py-2">{item.unit}</td>
                  <td className="border-b px-4 py-2">{item.reqQty}</td>
                  <td className="border-b px-4 py-2 text-center">
                    <span
                      className={`px-2 py-1 text-xs rounded-lg ${
                        item.status === "In Use"
                          ? "bg-green-200 text-green-700"
                          : item.status === "Under Maintenance"
                          ? "bg-yellow-200 text-yellow-700"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs ml-2"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs ml-2"
                      onClick={() => handleUpdateStatus(index)}
                    >
                      Update Status
                    </button>
                    <button
                      className="bg-purple-500 text-white px-2 py-1 rounded-lg text-xs ml-2"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">
              QR Code for {selectedItem.itemCode}
            </h2>
            <QRCodeCanvas value={JSON.stringify(selectedItem)} />
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs mt-2"
              onClick={handleCloseQRCode}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* QR Code Scanner */}
      {showScanner && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">Scan QR Code</h2>
            <video ref={videoRef} style={{ width: "100%" }} />
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs mt-2"
              onClick={() => setShowScanner(false)}
            >
              Close Scanner
            </button>
          </div>
        </div>
      )}

      {/* Scanned Item Details */}
      {scannedItem && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Scanned Item Details</h2>
          <p>
            <strong>Item Code:</strong> {scannedItem.itemCode}
          </p>
          <p>
            <strong>Description:</strong> {scannedItem.description}
          </p>
          <p>
            <strong>Location:</strong> {scannedItem.location}
          </p>
          <p>
            <strong>Status:</strong> {scannedItem.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;
