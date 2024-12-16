import React from "react";

const LowStockAlert = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <div className="bg-orange-100 text-orange-700 p-4 rounded-lg mb-6">
      <h2 className="font-bold mb-2">Low Stock Alerts</h2>
      <ul className="list-disc ml-5">
        {items.map((item) => (
          <li key={item.id}>
            {item.description} - Balance: {item.balance}, Required: {item.required}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LowStockAlert;
