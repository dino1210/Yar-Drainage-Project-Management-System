import React from "react";
import ProfileSection from "../components/Settings/ProfileSection";
import NotificationsSection from "../components/Settings/NotificationsSection";
import SecuritySection from "../components/Settings/SecuritySection";
import ConnectedAccounts from "../components/Settings/ConnectedAccounts";
import DangerZone from "../components/Settings/DangerZone";

const Setting = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 space-y-6">
      <ProfileSection />
      <NotificationsSection />
      <SecuritySection />
      <ConnectedAccounts />
      <DangerZone />
    </div>
  );
};

export default Setting;
