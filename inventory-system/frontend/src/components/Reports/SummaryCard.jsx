import React from "react";

const SummaryCard = ({ title, value, color, items }) => {
  return (
    <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
      <h2 className={`text-${color}-700 font-semibold mb-2`}>{title}</h2>
      <p className="text-2xl font-bold text-gray-800 mb-2">{value}</p>
      {/* Display List if Items Exist */}
      {items && items.length > 0 && (
        <ul className="text-sm text-gray-600 mt-2 space-y-1">
          {items.map((item, index) => (
            <li key={index} className="list-disc ml-4">
              {item.description} - {item.code}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SummaryCard;
