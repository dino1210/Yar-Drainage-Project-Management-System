import React from 'react';

const ItemDetails = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-2/3">
        <h2 className="text-2xl font-bold mb-4">Item Details</h2>
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {item.name}
          </p>
          <p>
            <strong>Quantity:</strong> {item.quantity}
          </p>
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span
              className={`${
                item.status === 'Low Stock'
                  ? 'text-red-500'
                  : item.status === 'Defective'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              }`}
            >
              {item.status}
            </span>
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Transaction History</h3>
          <ul className="mt-2 list-disc pl-5">
            {item.history &&
              item.history.map((record, index) => (
                <li key={index}>
                  {record.date} - {record.action} - {record.details}
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
