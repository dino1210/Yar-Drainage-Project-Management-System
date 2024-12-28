import React from "react";
import SettingsCard from "./SettingsCard";

const ProfileSection = () => {
  return (
    <SettingsCard
      title="Profile"
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
            d="M12 12c2.209 0 4-1.791 4-4S14.209 4 12 4 8 5.791 8 8s1.791 4 4 4zM12 14c-4.418 0-8 2.686-8 6h16c0-3.314-3.582-6-8-6z"
          />
        </svg>
      }
    >
      <div className="flex items-center space-x-4">
        <img
          src="src/assets/images/angelo.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-gray-800 font-medium">Angelito Jericho Rosales</h3>
          <p className="text-gray-500">angelitojerichorosales@example.com</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-gray-600">
        <p>
          <span className="font-medium text-gray-800">Phone:</span> +63 987654321
        </p>
        <p>
          <span className="font-medium text-gray-800">Designation:</span> Project Manager
        </p>
       
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg">
        Edit Profile
      </button>
    </SettingsCard>
  );
};

export default ProfileSection;
