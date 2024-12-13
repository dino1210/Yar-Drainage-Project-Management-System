import React from "react";
import ProfileSection from "../components/Settings/ProfileSection";
import NotificationsSection from "../components/Settings/NotificationsSection";
import SecuritySection from "../components/Settings/SecuritySection";

const Setting = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      <div className="space-y-6">
        <ProfileSection />
        <NotificationsSection />
        <SecuritySection />
      </div>
    </div>
  );
};

export default Setting;
