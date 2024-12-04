import React, { useState } from "react"; 
import UserList from "../components/UserManagements/UserList"; 
import AddUser from "../components/UserManagements/AddUser"; 

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleOpenModal = () => setIsModalOpen(true); 
  const handleCloseModal = () => setIsModalOpen(false); 

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">USER MANAGEMENT</h2>

      {/* Add User Button */}
      <button
        onClick={handleOpenModal}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add New User
      </button>

      {/* User List */}
      <UserList /> {/* User list that shows current users */}

      {/* Add User Modal */}
      {isModalOpen && <AddUser onClose={handleCloseModal} />} {/* Modal for adding new user */}
    </div>
  );
};

export default UserManagement;
