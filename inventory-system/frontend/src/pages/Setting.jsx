import React from "react";
import ProfileSection from "../components/Settings/ProfileSection";
import NotificationsSection from "../components/Settings/NotificationsSection";
import SecuritySection from "../components/Settings/SecuritySection";
import ConnectedAccounts from "../components/Settings/ConnectedAccounts";
import DangerZone from "../components/Settings/DangerZone";

const Setting = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Settings</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile</h2>
        <ProfileSection />
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Notifications
        </h2>
        <NotificationsSection />
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Security</h2>
        <SecuritySection />
      </div>

      {/* Connected Accounts */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Connected Accounts
        </h2>
        <ConnectedAccounts />
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Danger Zone
        </h2>
        <DangerZone />
      </div>
    </div>
  );
};

export default Setting;
