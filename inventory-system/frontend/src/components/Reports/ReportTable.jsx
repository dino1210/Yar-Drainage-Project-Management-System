import React from "react";

const ReportTable = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">Item Code</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-center">Balance</th>
            <th className="px-4 py-2 text-center">Required Quantity</th>
            <th className="px-4 py-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.location}</td>
              <td className="border px-4 py-2 text-center">{item.balance}</td>
              <td className="border px-4 py-2 text-center">{item.required}</td>
              <td
                className={`border px-4 py-2 text-center ${
                  item.balance === 0 ? "text-red-500" : item.balance < item.required ? "text-orange-500" : "text-green-500"
                }`}
              >
                {item.balance === 0 ? "Out of Stock" : item.balance < item.required ? "Low Stock" : "Available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
