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
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
          />
        </svg>
      }
    >
     <div className="space-y-6">
  
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
