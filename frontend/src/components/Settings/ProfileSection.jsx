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
            d="M5.121 17.804A4 4 0 117.804 5.121m6.367 0a4 4 0 112.683 12.683M8 17.5v2a2 2 0 002 2h4a2 2 0 002-2v-2"
          />
        </svg>
      }
    >
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/60"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-gray-800 font-medium">Angelito Jericho Rosales</h3>
          <p className="text-gray-500">angelitojerichorosales@example.com</p>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Edit Profile
      </button>
    </SettingsCard>
  );
};

export default ProfileSection;
