import React from "react";
import { Download } from "lucide-react";

const ExportButtons = () => {
  return (
    <div className="flex space-x-4 justify-end">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2">
        <Download className="w-5 h-5" />
        <span>Export as PDF</span>
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2">
        <Download className="w-5 h-5" />
        <span>Export as Excel</span>
      </button>
    </div>
  );
};

export default ExportButtons;
