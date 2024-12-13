import React from "react";

const ConnectedAccounts = () => {
  const accounts = [
    { id: 1, name: "Google", status: "Connected", logo: "src/assets/images/google.png" },
    { id: 2, name: "Facebook", status: "Connect", logo: "src/assets/images/facebook.png" },
    { id: 3, name: "Twitter", status: "Connected", logo: "src/assets/images/x.jpg" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-gray-800 text-lg font-semibold mb-4">
        Connected Accounts
      </h3>
      <ul>
        {accounts.map((account) => (
          <li
            key={account.id}
            className="flex justify-between items-center py-2 border-b last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              {/* Account Logo */}
              <img src={account.logo} alt={account.name} className="w-6 h-6" />
              {/* Account Name */}
              <span className="text-gray-800">{account.name}</span>
            </div>
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                account.status === "Connected"
                  ? "bg-green-100 text-green-700 border border-green-500"
                  : "bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200"
              }`}
            >
              {account.status}
            </button>
          </li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-700">
        + Add Account
      </button>
    </div>
  );
};

export default ConnectedAccounts;
