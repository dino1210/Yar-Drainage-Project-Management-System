import React, { useState } from "react";
import ReportTable from "../components/Reports/ReportTable";
import SummaryCard from "../components/Reports/SummaryCard";
import ExportButtons from "../components/Reports/ExportButtons";
import LowStockAlert from "../components/Reports/LowStockAlert";

const Reports = () => {
  const [inventoryData, setInventoryData] = useState([
    { id: 1, code: "DISC-001", description: "Cutting Disc 4\" 1mm", location: "Rack 3-Drawer 11", balance: 875, required: 100 },
    { id: 2, code: "DISC-002", description: "Cutting Disc 4\" 2.5mm", location: "Rack 3-Drawer 11", balance: 20, required: 50 },
    { id: 3, code: "DISC-003", description: "Cutting Disc 7\"", location: "Rack 3-Drawer 11", balance: 10, required: 10 },
    { id: 4, code: "DISC-004", description: "Cutting Wheel 14\"", location: "Rack 3-Drawer 11", balance: 0, required: 10 },
  ]);

  const totalItems = inventoryData;
  const lowStockItems = inventoryData.filter((item) => item.balance < item.required && item.balance > 0);
  const outOfStockItems = inventoryData.filter((item) => item.balance === 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Inventory Report</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <SummaryCard title="Total Items" value={totalItems.length} color="gray" items={totalItems} />
        <SummaryCard title="Low Stock" value={lowStockItems.length} color="orange" items={lowStockItems} />
        <SummaryCard title="Out of Stock" value={outOfStockItems.length} color="red" items={outOfStockItems} />
      </div>

      {/* Low Stock Alerts */}
      <LowStockAlert items={lowStockItems} />

      {/* Inventory Table */}
      <ReportTable data={inventoryData} />

      {/* Export Buttons */}
      <ExportButtons />
    </div>
  );
};

export default Reports;
