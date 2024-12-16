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
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-left">Add New Inventory Item</h2>

        <div className="space-y-4">
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="tag"
            type="text"
            placeholder="Tag/Code"
            value={formData.tag}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="totalQty"
            type="number"
            placeholder="Total Quantity"
            value={formData.totalQty}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="onHand"
            type="number"
            placeholder="On Hand"
            value={formData.onHand}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="out"
            type="number"
            placeholder="Out"
            value={formData.out}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="remarks"
            type="text"
            placeholder="Remarks"
            value={formData.remarks}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
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
