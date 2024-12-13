import React from "react";

const SettingsCard = ({ children, title, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon && <div className="text-blue-500 mr-3">{icon}</div>}
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SettingsCard;
