import React, { useState } from 'react';

const CheckInOutForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    action: 'Check-Out',
    quantity: '',
    assignedTo: '',
    project: '',
    date: new Date().toISOString().split('T')[0], // Default to today's date
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">{formData.action} Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="action"
            value={formData.action}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="Check-Out">Check-Out</option>
            <option value="Check-In">Check-In</option>
          </select>
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="assignedTo"
            type="text"
            placeholder="Assigned To (User/Department)"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="project"
            type="text"
            placeholder="Project/Location"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckInOutForm;
