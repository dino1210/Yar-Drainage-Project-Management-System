import React, { useState } from "react";
import { Search } from "lucide-react";
import QRCode from "react-qr-code";

const Check = () => {
  // Data for inventory items
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

  // State for search input and selected QR code item
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Update search value
  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  // Show QR Code for selected item
  const handleShowQRCode = (item) => {
    setSelectedItem(item);
  };

  // Close QR Code modal
  const handleCloseQRCode = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto p-2 text-xs">
      {/* Search and Add Section */}
      <div className="bg-white rounded-lg p-2 shadow-md mb-4">
        <div className="flex items-center space-x-4">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
            value={search}
            onChange={handleSearch}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-2 px-4 rounded-lg"
            onClick={() => {}}
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Inventory Table */}
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
              <th className="border-b px-4 py-2 text-left">Actions</th>
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
                    <button className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs">
                      Check In
                    </button>
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs ml-2">
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
          <div className="mt-4">
            <h2 className="text-lg font-bold">
              QR Code for {selectedItem.itemCode}
            </h2>
            <QRCode value={JSON.stringify(selectedItem)} />
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs mt-2"
              onClick={handleCloseQRCode}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Check;
