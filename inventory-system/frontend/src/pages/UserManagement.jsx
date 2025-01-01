import React, { useState } from "react";
import { Search } from "lucide-react";

const UserManagement = () => {
  const [users, setUsers] = useState([]); // Start with an empty user list
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    fullName: "",
    email: "",
    role: "User",
    status: "Active",
  });
  const [editUser, setEditUser] = useState(null);

  // Search handler
  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  // Add User Handler
  const handleAddUser = () => {
    if (!newUser.username || !newUser.fullName || !newUser.email) {
      alert("Please fill in all fields!");
      return;
    }

    const updatedUsers = [
      ...users,
      {
        id: users.length + 1,
        ...newUser,
      },
    ];
    setUsers(updatedUsers);
    setShowAddModal(false);
    setNewUser({ username: "", fullName: "", email: "", role: "User", status: "Active" });
  };

  // Edit User Handler
  const handleEditUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editUser.id ? { ...editUser } : user
    );
    setUsers(updatedUsers);
    setShowEditModal(false);
    setEditUser(null);
  };

  // Delete User Handler
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  // Toggle Status Handler
  const handleToggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto p-2 text-xs">
      {/* Search and Add New User Section */}
      <div className="bg-white rounded-lg p-2 shadow-md mb-2">
        <div className="flex flex-wrap space-x-4 items-center">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 text-sm rounded-lg p-2 flex-grow"
            value={search}
            onChange={handleSearch}
          />
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-lg"
          >
            Add User
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <table className="min-w-full table-auto text-xs text-gray-600">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">Username</th>
              <th className="border-b px-4 py-2 text-left">Full Name</th>
              <th className="border-b px-4 py-2 text-left">Email</th>
              <th className="border-b px-4 py-2 text-left">Role</th>
              <th className="border-b px-4 py-2 text-left">Status</th>
              <th className="border-b px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(
                (user) =>
                  user.username.toLowerCase().includes(search) ||
                  user.fullName.toLowerCase().includes(search) ||
                  user.email.toLowerCase().includes(search)
              )
              .map((user) => (
                <tr key={user.id}>
                  <td className="border-b px-4 py-2">{user.username}</td>
                  <td className="border-b px-4 py-2">{user.fullName}</td>
                  <td className="border-b px-4 py-2">{user.email}</td>
                  <td className="border-b px-4 py-2">{user.role}</td>
                  <td className="border-b px-4 py-2">{user.status}</td>
                  <td className="border-b px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => {
                          setEditUser(user);
                          setShowEditModal(true);
                        }}
                        className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleToggleStatus(user.id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                      >
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Add New User</h2>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Full Name"
                value={newUser.fullName}
                onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
              />
              <input
                type="email"
                className="w-full border px-3 py-2 rounded"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              <select
                className="w-full border px-3 py-2 rounded"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleAddUser}>
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit User</h2>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Username"
                value={editUser?.username || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, username: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                placeholder="Full Name"
                value={editUser?.fullName || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, fullName: e.target.value })
                }
              />
              <input
                type="email"
                className="w-full border px-3 py-2 rounded"
                placeholder="Email"
                value={editUser?.email || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />
              <select
                className="w-full border px-3 py-2 rounded"
                value={editUser?.role || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, role: e.target.value })
                }
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleEditUser}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
