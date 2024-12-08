import React from "react";
import SettingsCard from "./SettingsCard";
import ToggleSwitch from "./ToggleSwitch";

const NotificationsSection = () => {
  return (
    <SettingsCard
      title="Notifications"
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
            d="M15 17h5l-1.405-1.405M5 17h5l-1.405-1.405M6 10h4m-2-2v4M18 12h2m-2 0a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      }
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Push Notifications</span>
          <ToggleSwitch />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-800">Email Notifications</span>
          <ToggleSwitch />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-800">SMS Notifications</span>
          <ToggleSwitch />
        </div>
      </div>
    </SettingsCard>
  );
};

export default NotificationsSection;
