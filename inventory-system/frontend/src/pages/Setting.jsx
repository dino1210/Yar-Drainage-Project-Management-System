import React from "react";
import ProfileSection from "../components/Settings/ProfileSection";
import NotificationsSection from "../components/Settings/NotificationsSection";
import SecuritySection from "../components/Settings/SecuritySection";

const Setting = () => {
  const handleLogout = () => {
    // Add logout logic here (e.g., clearing auth tokens, redirecting to login page)
    console.log("User logged out");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col justify-between">
      <div className="space-y-6">
        <ProfileSection />
        <NotificationsSection />
        <SecuritySection />
      </div>

      {/* Logout Button at the Bottom */}
      <div className="mt-8 flex justify-center">
  <button
    onClick={handleLogout}
    className="w-full max-w-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
  >
    Logout
  </button>
</div>


    </div>
  );
};

export default Setting;
