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
  FaHistory,
} from "react-icons/fa";

const InventoryTable = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      name: "Contender Welding Machine",
      code: "POWER-WLDGM_CONTNDR-1",
      category: "Welding Machine",
      quantity: 10,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "In good condition",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "XamaPro Welding Machine",
      code: "POWER-WLDGM_XMPRO-1",
      category: "Welding Machine",
      quantity: 15,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "For repair",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Bosch Angle Grinder",
      code: "POWER-ANGLGRNDR_BSCH-2",
      category: "Angle Grinder",
      quantity: 1,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Makita Circular Saw",
      code: "POWER-CRCLRSAW_MKTA-1",
      category: "Circular Saw",
      quantity: 8,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "For repair",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Greenfield Circular Saw",
      code: "POWER-CRCLRSAW_GRNFLD-1",
      category: "Circular Saw",
      quantity: 3,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "In good condition",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Makita Vertical Grinder",
      code: "POWER-VRTCLGRNDR_MKTA-1",
      category: "Vertical Grinder",
      quantity: 15,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Stihl Chain Saw",
      code: "POWER-CHNSAW_STHL-1",
      category: "Chainsaw",
      quantity: 9,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Reciprocating Saw",
      code: "POWER-RCPRCTNGSAW-1",
      category: "Reciprocating Saw",
      quantity: 3,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: ".",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Submersible Pump",
      code: "POWER-SBMRSBLPUMP-10",
      category: "Pumps",
      quantity: 10,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "In good condition",
      maintenanceDue: false,
      checkOutHistory: [],
      damageReports: [],
    },

    {
      name: "Electric Blower Big Orange",
      code: "POWER-ELCTRCBLWR_ORNGBIG-1",
      category: "Electric Blower",
      quantity: 1,
      status: "Available",
      qr: "https://via.placeholder.com/150",
      lastUpdated: "2024-12-04",
      remarks: "For repair",
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
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState({});
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

  //Open Edit Modal
  const handleEditUser = (user) => {
    setEditingUser(user); 
    setShowEditModal(true); 
  };

  //Save Edit Changes
  const handleSaveUserEdit = () => {
    const updatedData = [...inventoryData];
    const userIndex = updatedData.findIndex(
      (item) => item.code === editingUser.code
    );
    if (userIndex > -1) {
      updatedData[userIndex] = {
        ...editingUser,
        lastUpdated: new Date().toLocaleString(),
      };
      setInventoryData(updatedData);
      logAction("Edited user", editingUser.name);
    }
    setShowEditModal(false); // Close modal
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

  // Handle In/Out Actions
  const handleStatusChange = (item, action) => {
    const updatedData = inventoryData.map((invItem) => {
      if (invItem.code === item.code) {
        const newStatus =
          action === "in"
            ? "Available"
            : action === "out"
            ? "Not Available"
            : invItem.status;

        return {
          ...invItem,
          status: newStatus,
          checkOutHistory: [
            ...invItem.checkOutHistory,
            { action, date: new Date().toLocaleString() },
          ],
        };
      }
      return invItem;
    });
    setInventoryData(updatedData);
    logAction(`${action === "in" ? "Checked In" : "Checked Out"}`, item.name);
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
      {/* Header */}
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
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />

          {/* Category Filter */}
    <select
      value={selectedFilter}
      onChange={(e) => setSelectedFilter(e.target.value)}
      className="px-4 py-2 border rounded-md"
    >
      <option value="All">All Categories</option>
      <option value="Welding Machine">Welding Machine</option>
      <option value="Angle Grinder">Angle Grinder</option>
      <option value="Circular Saw">Circular Saw</option>
      <option value="Chainsaw">Chainsaw</option>
      <option value="Pumps">Pumps</option>
      <option value="Electric Blower">Electric Blower</option>
    </select>
    <button
      className="bg-[#800020] text-white px-4 py-2 rounded-md hover:bg-[#9B0026]"
      onClick={() => setShowAddModal(true)}
    >

    </button>
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
                        : item.status === "In Maintenance"
                        ? "bg-yellow-500"
                        : "bg-red-500"
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
                    onClick={() => handleEditUser(item)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleViewHistory(item)}
                    className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700"
                  >
                    <FaHistory /> View History
                  </button>
                  <button
                    onClick={() => handleStatusChange(item, "in")}
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                  >
                    Check In
                  </button>
                  <button
                    onClick={() => handleStatusChange(item, "out")}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Check Out
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
              <option value="Circular Saw">Virticular Grinder</option>
              <option value="Circular Saw">Pencil Grinder</option>
              <option value="Circular Saw">Circular Saw</option>
              <option value="Circular Saw">Chainsaw</option>
              <option value="Circular Saw">Reciprocating Saw</option>
              <option value="Circular Saw">Grass Cutter</option>
              <option value="Circular Saw">Cut-Off Machines</option>
              <option value="Circular Saw">Electric Drill</option>
              <option value="Circular Saw">Power Sprayer</option>
              <option value="Circular Saw">Chain Block</option>
              <option value="Circular Saw">Electric Blower</option>
            </select>
            <textarea
              placeholder="Remarks"
              value={newItem.remarks}
              onChange={(e) =>
                setNewItem({ ...newItem, remarks: e.target.value })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setNewItem({ ...newItem, qr: event.target.result });
                  };
                  reader.readAsDataURL(file);
                }
              }}
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

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Edit User</h2>
            <input
              type="text"
              placeholder="Name"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Code"
              value={editingUser.code}
              disabled
              className="w-full px-4 py-2 mb-2 border rounded-md bg-gray-100"
            />
            <select
              value={editingUser.category}
              onChange={(e) =>
                setEditingUser({ ...editingUser, category: e.target.value })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            >
              <option value="Welding Machine">Welding Machine</option>
              <option value="Angle Grinder">Angle Grinder</option>
              <option value="Circular Saw">Circular Saw</option>
            </select>
            <textarea
              placeholder="Remarks"
              value={editingUser.remarks}
              onChange={(e) =>
                setEditingUser({ ...editingUser, remarks: e.target.value })
              }
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setEditingUser({ ...editingUser, qr: event.target.result });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full px-4 py-2 mb-2 border rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSaveUserEdit}
                className="bg-[#800020] text-white px-4 py-2 rounded-md hover:bg-[#9B0026]"
              >
                Save
              </button>
              <button
                onClick={() => setShowEditModal(false)}
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
