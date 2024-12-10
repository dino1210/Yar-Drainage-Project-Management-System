import React from 'react';

const InventoryTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded p-4">
      {data.map((category, index) => (
        <div key={index} className="mb-6">
          <div className="bg-red-400 text-white px-4 py-2 font-bold">
            {category.category.toUpperCase()}
          </div>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Tool/Equipment Description</th>
                <th className="px-4 py-2 text-left">Tag/Code</th>
                <th className="px-4 py-2 text-left">Total Qty</th>
                <th className="px-4 py-2 text-left">Unit</th>
                <th className="px-4 py-2 text-left">On Hand</th>
                <th className="px-4 py-2 text-left">Out</th>
                <th className="px-4 py-2 text-left">Remarks/Notes</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.tag}</td>
                  <td className="px-4 py-2">{item.totalQty}</td>
                  <td className="px-4 py-2">{item.unit}</td>
                  <td className="px-4 py-2">{item.onHand}</td>
                  <td className="px-4 py-2">{item.out}</td>
                  <td className="px-4 py-2 text-red-500">{item.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default InventoryTable;
