import React, { useState } from "react";

const InventoryManagement = () => {
  const [data, setData] = useState([]); // Start with an empty inventory list
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    itemCode: "",
    description: "",
    location: "",
    beginning: 0,
    balance: 0,
    unit: "",
    reqQty: 0,
    status: "In Use",
  });

  // Add Product Handler
  const handleAddProduct = () => {
    if (!newProduct.itemCode || !newProduct.description) {
      alert("Please fill out all required fields.");
      return;
    }

    setData([...data, newProduct]);
    setNewProduct({
      itemCode: "",
      description: "",
      location: "",
      beginning: 0,
      balance: 0,
      unit: "",
      reqQty: 0,
      status: "In Use",
    });
    setShowAddModal(false);
  };

  // Edit Product Handler
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

  // Delete Product Handler
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
    }
  };

  // Update Status Handler
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

  return (
    <div className="container mx-auto p-2 text-xs">
      <div className="bg-white rounded-lg p-2 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Inventory Management</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs"
            onClick={() => setShowAddModal(true)}
          >
            Add Product
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
              <th className="border-b px-4 py-2 text-left">Required Quantity</th>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
            <h2 className="text-lg font-bold mb-4">Add New Product</h2>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Item Code
              </label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter Item Code"
                value={newProduct.itemCode}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, itemCode: e.target.value })
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter Description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter Location"
                value={newProduct.location}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, location: e.target.value })
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Beginning Quantity
              </label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter Beginning Quantity"
                value={newProduct.beginning}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, beginning: +e.target.value })
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Balance Quantity
              </label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter Balance Quantity"
                value={newProduct.balance}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, balance: +e.target.value })
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Required Quantity
              </label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter Required Quantity"
                value={newProduct.reqQty}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, reqQty: +e.target.value })
                }
              />
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                className="w-full border px-3 py-2 rounded"
                value={newProduct.status}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, status: e.target.value })
                }
              >
                <option value="In Use">In Use</option>
                <option value="Under Maintenance">Under Maintenance</option>
                <option value="Broken">Broken</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
  <button
    className="bg-red-500 text-white px-6 py-2 rounded-lg text-xs"
    onClick={() => setShowAddModal(false)}
  >
    Cancel
  </button>
  <button
    className="bg-blue-500 text-white px-6 py-2 rounded-lg text-xs"
    onClick={handleAddProduct}
  >
    Add Product
  </button>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;
