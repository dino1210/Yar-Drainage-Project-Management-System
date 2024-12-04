import React, { useState } from 'react';

const UserRow = ({ user }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = () => {
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    alert(`User ${user.name} deleted.`);
    setIsConfirmOpen(false);
  };

  return (
    <>
      <tr>
        <td className="border-b p-2">{user.name}</td>
        <td className="border-b p-2">{user.role}</td>
        <td className="border-b p-2">{user.email}</td>
        <td className="border-b p-2">
          <button className="text-blue-500 hover:underline mr-2">Edit</button>
          <button onClick={handleDelete} className="text-red-500 hover:underline">
            Delete
          </button>
        </td>
      </tr>

      {/* Confirmation Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserRow;
