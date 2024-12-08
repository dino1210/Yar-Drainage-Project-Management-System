import React from "react";
import UserRow from "./UserRow";

const UserList = ({ users }) => {
  return (
    <table className="w-full text-left border-collapse table-fixed">
      <thead>
        <tr>
          <th className="border-b p-4 w-1/4">Name</th>
          <th className="border-b p-4 w-1/4">Role</th>
          <th className="border-b p-4 w-1/4">Email</th>
          <th className="border-b p-4 w-1/4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
        {users.length === 0 && (
          <tr>
            <td colSpan="4" className="text-center p-6 text-gray-500">
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
