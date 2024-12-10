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
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17c1.104 0 2-.896 2-2v-1.5a2 2 0 00-4 0V15c0 1.104.896 2 2 2zm7-6v6c0 2.21-1.79 4-4 4H9c-2.21 0-4-1.79-4-4v-6a4 4 0 014-4h6a4 4 0 014 4zM9 7V5a3 3 0 016 0v2"
          />
        </svg>
      }
    >
      <div className="space-y-4">
        {/* Two-Factor Authentication Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-medium">
            Two-Factor Authentication
          </span>
          <input
            type="checkbox"
            className="toggle-checkbox w-6 h-6 text-blue-500 rounded-full focus:ring focus:ring-blue-300"
          />
        </div>
        {/* Change Password Button */}
        <button className=" px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Change Password
        </button>
      </div>
    </SettingsCard>
  );
};

export default SecuritySection;
