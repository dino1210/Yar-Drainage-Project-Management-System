import React, { useState, useEffect } from "react";
import {
  FaRegUser,
  FaRegClock,
  FaEdit,
  FaTrashAlt,
  FaBell,
  FaChartPie,
  FaPlus,
  FaWrench,
  FaFileExport,
  FaHistory,
} from "react-icons/fa";

const InventoryTable = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      name: "Welding Machine",
      code: "WM001",
      category: "Welding Machine",
      quantity: 10,
      status: "Available",
      qr: "https://via.placeholder.com/150", // Placeholder for QR URL
      lastUpdated: "2024-12-04",
      remarks: "In good condition",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },
  ]);

  const [logs, setLogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingData, setEditingData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    code: "",
    category: "Welding Machine",
    quantity: 1,
    status: "Available",
    qr: "",
    remarks: "",
  });
  const [selectedFilter, setSelectedFilter] = useState("All");

  const itemsPerPage = 5;

  // Generate Logs for Actions
  const logAction = (action, itemName) => {
    setLogs((prevLogs) => [
      ...prevLogs,
      `${new Date().toLocaleString()} - ${action} for ${itemName}`,
    ]);
  };

  // Check for Notifications
  useEffect(() => {
    const overdueItems = inventoryData.filter(
      (item) => item.maintenanceDue && item.status === "Available"
    );
    if (overdueItems.length > 0) {
      setNotifications((prev) => [
        ...prev,
        ...overdueItems.map((item) => `${item.name} requires maintenance!`),
      ]);
    }
  }, [inventoryData]);

  // Handle Save Edit
  const handleSaveEdit = () => {
    const updatedData = [...inventoryData];
    updatedData[editingIndex] = {
      ...editingData,
      lastUpdated: new Date().toLocaleString(),
    };
    setInventoryData(updatedData);
    setEditingIndex(null);
    logAction("Edited item", editingData.name);
  };

  // Handle Add Item
  const handleAddItem = () => {
    if (!newItem.name || !newItem.code) {
      alert("Name and Code are required!");
      return;
    }
    setInventoryData((prev) => [
      ...prev,
      { ...newItem, lastUpdated: new Date().toLocaleString() },
    ]);
    setShowAddModal(false);
    setNewItem({
      name: "",
      code: "",
      category: "Welding Machine",
      quantity: 1,
      status: "Available",
      qr: "",
      remarks: "",
    });
    logAction("Added new item", newItem.name);
  };

  // Export Data to CSV
  const handleExportCSV = () => {
    const csvHeaders = [
      "Name",
      "Code",
      "Category",
      "Quantity",
      "Status",
      "QR",
      "Last Updated",
      "Remarks",
    ];
    const csvRows = inventoryData.map((item) => [
      item.name,
      item.code,
      item.category,
      item.quantity,
      item.status,
      item.qr,
      item.lastUpdated,
      item.remarks,
    ]);
    const csvContent = [csvHeaders, ...csvRows]
      .map((e) => e.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "inventory.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Advanced Search and Filters
  const filteredInventoryData = inventoryData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInventoryData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredInventoryData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Open History Modal
  const handleViewHistory = (item) => {
    setHistoryData([...item.checkOutHistory, ...item.damageReports]);
    setShowHistoryModal(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Inventory Monitoring (Admin Panel)
        </h1>
        <div className="flex space-x-4">
          <button
            className="bg-[#800020] text-white px-4 py-2 rounded-md hover:bg-[#9B0026]"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus className="inline-block mr-2" /> Add Item
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={handleExportCSV}
          >
            <FaFileExport className="inline-block mr-2" /> Export CSV
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <h2 className="font-bold mb-2">Notifications</h2>
          <ul className="list-disc pl-5">
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Search & Filters */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          className="w-full px-4 py-2 border rounded-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-md"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Welding Machine">Welding Machine</option>
          <option value="Angle Grinder">Angle Grinder</option>
          <option value="Circular Saw">Circular Saw</option>
        </select>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-sm">
          <thead className="bg-[#800020] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">QR</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 border-t text-sm">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      item.status === "Available"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {item.qr ? (
                    <img
                      src={item.qr}
                      alt="QR"
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    "No QR"
                  )}
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => handleViewHistory(item)}
                    className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700"
                  >
                    <FaHistory /> View History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Item History</h2>
            <ul className="list-disc pl-5">
              {historyData.map((entry, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  {entry.timestamp || entry.reportedAt} -{" "}
                  {entry.description || entry.action}
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Add New Item</h2>
            <input
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Code"
              value={newItem.code}
              onChange={(e) => setNewItem({ ...newItem, code: e.target.value })}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <select
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            >
              <option value="Welding Machine">Welding Machine</option>
              <option value="Angle Grinder">Angle Grinder</option>
              <option value="Circular Saw">Circular Saw</option>
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="QR Code URL"
              value={newItem.qr}
              onChange={(e) => setNewItem({ ...newItem, qr: e.target.value })}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <textarea
              placeholder="Remarks"
              value={newItem.remarks}
              onChange={(e) =>
                setNewItem({ ...newItem, remarks: e.target.value })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddItem}
                className="bg-[#800020] text-white px-4 py-2 rounded-md hover:bg-[#9B0026]"
              >
                Add
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
