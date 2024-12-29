import React, { useState, useRef } from "react";
import { Search } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const Check = () => {
  const data = [
    {
      itemCode: "DISC-001",
      description: 'Cutting Disc 4" 1mm',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 875,
      quantityCheckedOut: 25,
      quantityCheckedIn: 0,
    },
    {
      itemCode: "DISC-002",
      description: 'Cutting Disc 4" 2.5mm',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 598,
      quantityCheckedOut: 0,
      quantityCheckedIn: 0,
    },
    {
      itemCode: "DISC-003",
      description: 'Cutting Disc 7"',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 10,
      quantityCheckedOut: 0,
      quantityCheckedIn: 0,
    },
    {
      itemCode: "DISC-004",
      description: 'Cutting Wheel 14"',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 9,
      quantityCheckedOut: 0,
      quantityCheckedIn: 0,
    },
    {
      itemCode: "DISC-005",
      description: 'Grinding Disc 4"',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 252,
      quantityCheckedOut: 20,
      quantityCheckedIn: 0,
    },
    {
      itemCode: "DISC-006",
      description: 'Grinding Disc 7"',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 9,
      quantityCheckedOut: 0,
      quantityCheckedIn: 0,
    },
    {
      itemCode: "DISC-007",
      description: 'Flap Disc 4"',
      location: "Rack 3-Drawer 11",
      quantityAvailable: 307,
      quantityCheckedOut: 0,
      quantityCheckedIn: 0,
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showScanner, setShowScanner] = useState(false);
  const [scannedItem, setScannedItem] = useState(null);
  const [logs, setLogs] = useState([]);
  const videoRef = useRef(null);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
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

  const handleCheckIn = (item) => {
    if (item.quantityCheckedOut > 0) {
      const updatedData = data.map((d) => {
        if (d.itemCode === item.itemCode) {
          return {
            ...d,
            quantityAvailable: d.quantityAvailable + 1,
            quantityCheckedOut: d.quantityCheckedOut - 1,
            quantityCheckedIn: d.quantityCheckedIn + 1,
          };
        }
        return d;
      });
      setLogs([
        ...logs,
        `${item.itemCode} checked in at ${new Date().toLocaleString()}`,
      ]);
    }
  };

  const handleCheckOut = (item) => {
    if (item.quantityAvailable > 0) {
      const updatedData = data.map((d) => {
        if (d.itemCode === item.itemCode) {
          return {
            ...d,
            quantityAvailable: d.quantityAvailable - 1,
            quantityCheckedOut: d.quantityCheckedOut + 1,
          };
        }
        return d;
      });
      setLogs([
        ...logs,
        `${item.itemCode} checked out at ${new Date().toLocaleString()}`,
      ]);
    }
  };

  return (
    <div className="container mx-auto p-2 text-xs">
      <div className="bg-white rounded-lg p-2 shadow-md mb-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-2 px-4 rounded-lg"
            onClick={() => {}}
          >
            Add Product
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-xs py-2 px-4 rounded-lg"
            onClick={startScanner}
          >
            Scan QR Code
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-2 shadow-md">
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">Item Code</th>
              <th className="border-b px-4 py-2 text-left">Description</th>
              <th className="border-b px-4 py-2 text-left">Location</th>
              <th className="border-b px-4 py-2 text-left">Available Qty</th>
              <th className="border-b px-4 py-2 text-left">Checked Out</th>
              <th className="border-b px-4 py-2 text-left">Checked In</th>
              <th className="border-b px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter(
                (item) =>
                  item.itemCode.toLowerCase().includes(search) ||
                  item.description.toLowerCase().includes(search)
              )
              .map((item, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2">{item.itemCode}</td>
                  <td className="border-b px-4 py-2">{item.description}</td>
                  <td className="border-b px-4 py-2">{item.location}</td>
                  <td className="border-b px-4 py-2">
                    {item.quantityAvailable}
                  </td>
                  <td className="border-b px-4 py-2">
                    {item.quantityCheckedOut}
                  </td>
                  <td className="border-b px-4 py-2">
                    {item.quantityCheckedIn}
                  </td>
                  <td className="border-b px-4 py-2 text-center">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs"
                      onClick={() => handleCheckIn(item)}
                    >
                      Check In
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs ml-2"
                      onClick={() => handleCheckOut(item)}
                    >
                      Check Out
                    </button>
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs ml-2"
                      onClick={() => handleShowQRCode(item)}
                    >
                      Show QR Code
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

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
              <strong>Quantity Available:</strong>{" "}
              {scannedItem.quantityAvailable}
            </p>
          </div>
        )}
      </div>

      {/* Logs Section */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Transaction Logs</h2>
        <ul className="list-disc list-inside text-xs text-gray-600">
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Check;
