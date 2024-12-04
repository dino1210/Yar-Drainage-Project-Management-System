import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch data (for now, using static data)
  useEffect(() => {
    const fetchUsers = async () => {
      // Replace this with actual data fetch
      const data = [
        { id: 1, name: 'Angelo Padilla', role: 'Admin', email: 'angelitopadilla@gmail.com' },
        { id: 2, name: 'Angelo Padilla', role: 'Staff', email: 'angelitopadilla@gmail.com' },
        { id: 3, name: 'Angelo Padilla', role: 'Staff', email: 'angelitopadilla@gmail.com' },
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">Name</th>
          <th className="border-b p-2">Role</th>
          <th className="border-b p-2">Email</th>
          <th className="border-b p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
