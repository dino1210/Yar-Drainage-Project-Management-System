import React, { useState } from "react";
import { Search } from "lucide-react";

const UserManagement = () => {
  // Sample hardcoded user data
  const users = [
    {
      id: 1,
      username: "john_doe",
      fullName: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      username: "jane_smith",
      fullName: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      username: "alice_brown",
      fullName: "Alice Brown",
      email: "alice@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      username: "bob_johnson",
      fullName: "Bob Johnson",
      email: "bob@example.com",
      role: "Admin",
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
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
            onClick={() => {}}
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
            <td className="border-b px-4 py-2 text-left">{user.username}</td>
            <td className="border-b px-4 py-2 text-left">{user.fullName}</td>
            <td className="border-b px-4 py-2 text-left">{user.email}</td>
            <td className="border-b px-4 py-2 text-left">{user.role}</td>
            <td className="border-b px-4 py-2 text-left">{user.status}</td>
            <td className="border-b px-4 py-2 text-center">
              <button className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs ml-2">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs ml-2">
                Delete
              </button>
              <button className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs ml-2">
                {user.status === "Active" ? "Deactivate" : "Activate"}
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
</div>
  );
};

export default UserManagement;
