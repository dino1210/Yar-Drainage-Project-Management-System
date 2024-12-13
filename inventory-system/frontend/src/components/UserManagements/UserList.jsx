import React from "react";
import UserRow from "./UserRow";

const UserList = ({ users }) => {
  return (
    <table className="w-full text-left border-collapse table-fixed">
      <thead>
        <tr>
        <th className="border-b px-4 py-2 text-left w-1/5">Username</th>
        <th className="border-b px-4 py-2 text-left w-2/5">Full Name</th>
        <th className="border-b px-4 py-2 text-left w-2/5">Email</th>

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
