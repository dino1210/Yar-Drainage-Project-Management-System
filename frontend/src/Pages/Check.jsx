import React, { useState } from "react";

const Check = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [equipmentList, setEquipmentList] = useState([
    {
      id: 1,
      name: "Excavator",
      type: "Machine",
      status: "Available",
      qrCode: "QR001",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Pipe Cutter",
      type: "Tool",
      status: "In Use",
      qrCode: "QR002",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Drain Camera",
      type: "Equipment",
      status: "Available",
      qrCode: "QR003",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Concrete Mixer",
      type: "Machine",
      status: "In Maintenance",
      qrCode: "QR004",
      image: "https://via.placeholder.com/100",
    },
  ]);

  const statusColors = {
    Available: "bg-green-100 text-green-700",
    "In Use": "bg-yellow-100 text-yellow-700",
    "In Maintenance": "bg-red-100 text-red-700",
  };

  const handleStatusChange = (id, newStatus) => {
    setEquipmentList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const filteredEquipments = equipmentList.filter((equipment) =>
    equipment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 outline-none"
          placeholder="Search equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Equipment List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Equipment List
        </h2>
        {filteredEquipments.length > 0 ? (
          <ul className="space-y-6">
            {filteredEquipments.map((equipment) => (
              <li
                key={equipment.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg shadow border border-gray-200 bg-gray-50 hover:bg-gray-100"
              >
                {/* Equipment Details */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <img
                    src={equipment.image}
                    alt={`${equipment.name} Image`}
                    className="w-24 h-24 object-cover rounded-md border"
                  />
                  <div>
                    <p className="font-medium text-lg">{equipment.name}</p>
                    <p className="text-sm text-gray-600">
                      Type: {equipment.type}
                    </p>
                    <span
                      className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded ${
                        statusColors[equipment.status]
                      }`}
                    >
                      {equipment.status}
                    </span>
                  </div>
                </div>

                {/* QR Code and Status Options */}
                <div className="flex flex-col items-center space-y-4">
                  {/* QR Code Placeholder */}
                  <div className="w-20 h-20 flex items-center justify-center border border-gray-300 bg-gray-200 text-sm rounded">
                    {equipment.qrCode}
                  </div>

                  {/* Status Dropdown */}
                  <select
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                    value={equipment.status}
                    onChange={(e) =>
                      handleStatusChange(equipment.id, e.target.value)
                    }
                  >
                    <option value="Available">Available</option>
                    <option value="In Use">In Use</option>
                    <option value="In Maintenance">In Maintenance</option>
                  </select>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No equipment found.</p>
        )}
      </div>
    </div>
  );
};

export default Check;
