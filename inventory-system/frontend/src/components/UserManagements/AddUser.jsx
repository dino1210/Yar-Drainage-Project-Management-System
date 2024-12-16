import React, { useState } from "react";
import AddUser from "./AddUser";

const App = () => {
  const [users, setUsers] = useState([]); // State to hold the list of users
  const [showModal, setShowModal] = useState(false); // State to show/hide the modal

  const handleAddUser = (newUser) => {
    console.log("Adding user:", newUser); // Debugging log
    setUsers((prevUsers) => [...prevUsers, newUser]); // Add new user to the list
    setShowModal(false); // Close modal after adding
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Add User Button */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add User
      </button>

      {/* Modal for Adding User */}
      {showModal && (
        <AddUser onAddUser={handleAddUser} onClose={handleCloseModal} />
      )}

      {/* User List */}
      <h2 className="text-xl font-bold mt-6">Users</h2>
      <ul className="mt-4">
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index} className="p-2 border-b">
              {user.name} - {user.email} - {user.role}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No users added yet.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
