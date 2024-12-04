import React, { useState } from "react";

const InventoryTable = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      name: "Welding Machine",
      code: "WM001",
      category: "WELDING MACHINE",
      quantity: 10,
      status: "Available",
      qr: "qr-image-url", // Sample QR
      lastUpdated: "2024-12-04",
      remarks: "In good condition",
      updateHistory: [],
    },
    {
      name: "Angle Grinder",
      code: "AG002",
      category: "ANGLE GRINDER",
      quantity: 5,
      status: "Use",
      qr: "qr-image-url", // Sample QR
      lastUpdated: "2024-12-04",
      remarks: "Maintenance required",
      updateHistory: [],
    },
    {
      name: "Circular Saw",
      code: "CS003",
      category: "CIRCULAR SAW",
      quantity: 8,
      status: "Available",
      qr: "qr-image-url", // Sample QR
      lastUpdated: "2024-12-04",
      remarks: "Good condition",
      updateHistory: [],
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingData, setEditingData] = useState({});
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    code: "",
    category: "WELDING MACHINE",
    quantity: 0,
    status: "Available",
    remarks: "",
  });
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const statusColors = {
    Available: "bg-green-500",
    "Use": "bg-yellow-500",
    "Under Maintenance": "bg-red-500",
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingData({ ...inventoryData[index] });
  };

  const handleSaveEdit = () => {
    const updatedData = [...inventoryData];
    const updatedItem = { ...editingData };
    updatedItem.updateHistory.push({
      editedBy: "Admin",
      timestamp: new Date().toLocaleString(),
    });
    updatedData[editingIndex] = updatedItem;
    setInventoryData(updatedData);
    setEditingIndex(null);
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.code) {
      alert("Product Name and Code are required!");
      return;
    }
    setInventoryData([...inventoryData, newItem]);
    setShowAddItemModal(false);
    setNewItem({
      name: "",
      code: "",
      category: "WELDING MACHINE",
      quantity: 0,
      status: "Available",
      remarks: "",
    });
  };

  const handleChange = (e) => {
    setEditingData({
      ...editingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (index) => {
    const updatedData = inventoryData.filter((_, i) => i !== index);
    setInventoryData(updatedData);
  };

  // Filter functionality
  const filteredInventoryData = inventoryData.filter((item) => {
    const isTextMatch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.code.toLowerCase().includes(searchText.toLowerCase());
    const isCategoryMatch =
      selectedCategory === "" || item.category === selectedCategory;
    return isTextMatch && isCategoryMatch;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInventoryData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredInventoryData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleExportCSV = () => {
    const csvRows = [];
    const headers = [
      "Product Name",
      "Code",
      "Category",
      "Quantity",
      "Status",
      "QR",
      "Last Updated",
      "Remarks",
    ];
    csvRows.push(headers.join(","));
    inventoryData.forEach((item) => {
      const row = [
        item.name,
        item.code,
        item.category,
        item.quantity,
        item.status,
        item.qr,
        item.lastUpdated,
        item.remarks,
      ];
      csvRows.push(row.join(","));
    });
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = "inventory_data.csv";
    link.click();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">
          Inventory Management
        </h1>
        <button
          onClick={() => setShowAddItemModal(true)}
          className="px-6 py-3 bg-[#800020] text-white rounded-lg hover:bg-[#9B0026] transition-all duration-300"
        >
          Add Item
        </button>
      </div>

      {/* Search and Category Filters */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-6">
          <input
            type="text"
            placeholder="Search by Product Name or Code"
            className="px-4 py-2 border rounded-md text-sm w-80 transition-all transform focus:ring-2 focus:ring-[#800020] focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md text-sm transition-all transform focus:ring-2 focus:ring-[#800020] focus:outline-none"
          >
            <option value="">All Categories</option>
            <option value="WELDING MACHINE">WELDING MACHINE</option>
            <option value="ANGLE GRINDER">ANGLE GRINDER</option>
            <option value="PENCIL GRINDER">PENCIL GRINDER</option>
            <option value="CIRCULAR SAW">CIRCULAR SAW</option>
          </select>
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-[#800020] text-white">
            <th className="px-4 py-3">Product Name (Code #)</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Quantity</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">QR</th>
            <th className="px-4 py-3">Last Updated</th>
            <th className="px-4 py-3">Remarks</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              className={`${
                item.status === "Available"
                  ? "bg-green-50"
                  : item.status === "In Use"
                  ? "bg-yellow-50"
                  : "bg-red-50"
              } hover:bg-gray-100 transition-all duration-300`}
            >
              {editingIndex === index ? (
                <>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      name="name"
                      value={editingData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                    <span className="text-gray-500 text-xs">
                      {editingData.code}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <select
                      name="category"
                      value={editingData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    >
                      <option value="WELDING MACHINE">WELDING MACHINE</option>
                      <option value="ANGLE GRINDER">ANGLE GRINDER</option>
                      <option value="PENCIL GRINDER">PENCIL GRINDER</option>
                      <option value="CIRCULAR SAW">CIRCULAR SAW</option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      name="quantity"
                      value={editingData.quantity}
                      onChange={handleChange}
                      className="w-20 px-3 py-2 border rounded-md text-sm"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <select
                      name="status"
                      value={editingData.status}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    >
                      <option value="Available">Available</option>
                      <option value="In Use">In Use</option>
                      <option value="Under Maintenance">
                        Under Maintenance
                      </option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      name="qr"
                      value={editingData.qr}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      name="lastUpdated"
                      value={editingData.lastUpdated}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      name="remarks"
                      value={editingData.remarks}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={handleSaveEdit}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ml-2"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-4 py-3">
                    {item.name} <br />
                    <span className="text-gray-500 text-xs">{item.code}</span>
                  </td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-white px-3 py-1 rounded-full ${
                        statusColors[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={item.qr}
                      alt="QR"
                      className="w-20 h-20 object-contain"
                    />
                  </td>
                  <td className="px-4 py-3">{item.lastUpdated}</td>
                  <td className="px-4 py-3">{item.remarks}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="px-4 py-2 bg-[#800020] text-white rounded-lg hover:bg-[#9B0026] transition-all duration-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="ml-4 px-4 py-2 bg-[#800020] text-white rounded-lg hover:bg-[#9B0026] transition-all duration-300 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      </div>

      {/* Export Button */}
      <button
        onClick={handleExportCSV}
        className="mt-6 px-6 py-3 bg-[#800020] text-white rounded-lg hover:bg-[#9B0026] transition-all duration-300"
      >
        Export to CSV
      </button>

      {/* Add Item Modal */}
      {showAddItemModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product Code"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={newItem.code}
              onChange={(e) => setNewItem({ ...newItem, code: e.target.value })}
            />
            <select
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
              className="w-full px-4 py-2 mb-4 border rounded-md"
            >
              <option value="WELDING MACHINE">WELDING MACHINE</option>
              <option value="ANGLE GRINDER">ANGLE GRINDER</option>
              <option value="PENCIL GRINDER">PENCIL GRINDER</option>
              <option value="CIRCULAR SAW">CIRCULAR SAW</option>
            </select>
            <input
              type="number"
              placeholder="Quantity"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
              }
            />
            <select
              value={newItem.status}
              onChange={(e) =>
                setNewItem({ ...newItem, status: e.target.value })
              }
              className="w-full px-4 py-2 mb-4 border rounded-md"
            >
              <option value="Available">Available</option>
              <option value="In Use">In Use</option>
              <option value="Under Maintenance">Under Maintenance</option>
            </select>
            <textarea
              placeholder="Remarks"
              className="w-full px-4 py-2 mb-4 border rounded-md"
              value={newItem.remarks}
              onChange={(e) =>
                setNewItem({ ...newItem, remarks: e.target.value })
              }
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleAddItem}
                className="px-6 py-2 bg-[#800020] text-white rounded-lg hover:bg-[#9B0026]"
              >
                Add Item
              </button>
              <button
                onClick={() => setShowAddItemModal(false)}
                className="ml-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
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
