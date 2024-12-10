import React, { useState } from 'react';

const AddInventory = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    tag: '',
    totalQty: 0,
    unit: 'unit',
    onHand: 0,
    out: 0,
    remarks: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.category || !formData.description || !formData.tag) {
      alert('Please fill in all required fields.');
      return;
    }

    const newItem = {
      ...formData,
      totalQty: parseInt(formData.totalQty, 10) || 0,
      onHand: parseInt(formData.onHand, 10) || 0,
      out: parseInt(formData.out, 10) || 0,
    };

    onSave(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-2/3">
        <h2 className="text-xl font-bold mb-4">Add New Inventory Item</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tool/Equipment Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tag/Code</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Total Qty</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unit</th>
                <th className="border border-gray-300 px-4 py-2 text-left">On Hand</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Out</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Remarks/Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="category"
                    type="text"
                    placeholder="Enter Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="description"
                    type="text"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="tag"
                    type="text"
                    placeholder="Enter Tag/Code"
                    value={formData.tag}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="totalQty"
                    type="number"
                    placeholder="Total Quantity"
                    value={formData.totalQty}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  >
                    <option value="unit">Unit</option>
                    <option value="pcs">Pcs</option>
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="onHand"
                    type="number"
                    placeholder="On Hand"
                    value={formData.onHand}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="out"
                    type="number"
                    placeholder="Out"
                    value={formData.out}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    name="remarks"
                    type="text"
                    placeholder="Enter Remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
