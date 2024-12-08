import React, { useState } from "react";
import UserList from "../components/UserManagements/UserList";
import AddUser from "../components/UserManagements/AddUser";

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: "Angelo Padilla", role: "Admin", email: "angelo@gmail.com" },
    { id: 2, name: "Maria Santos", role: "Staff", email: "maria@gmail.com" },
    { id: 3, name: "Juan Cruz", role: "Staff", email: "juan@gmail.com" },
    { id: 4, name: "Ronald Reyes", role: "Staff", email: "ronald@gmail.com" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Open and close modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Add new user
  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
    handleCloseModal();
  };

  // Filtered users for search functionality
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
     
      {/* Search Bar and Add User Button */}
      <div className="flex items-center gap-x-4 mb-6">
        {/* Search Bar */}
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-2.5 left-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Add User Button */}
        <button
          onClick={handleOpenModal}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="overflow-x-auto">
        <UserList users={filteredUsers} />
      </div>

      {/* Add User Modal */}
      {isModalOpen && <AddUser onAddUser={handleAddUser} onClose={handleCloseModal} />}
    </div>
  );
};

export default UserManagement;
