import React from "react";
import SettingsCard from "./SettingsCard";

const SecuritySection = () => {
  return (
    <SettingsCard
      title="Security"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c.667 0 1 .333 1 1m0-1v3m0-3a2.001 2.001 0 10-4 0v4m1.874 5h4.252M16 20H8a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v9a2 2 0 01-2 2z"
          />
        </svg>
      }
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Two-Factor Authentication</span>
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-500 rounded-full focus:ring focus:ring-blue-300"
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Change Password
        </button>
      </div>
    </SettingsCard>
  );
};

export default SecuritySection;
