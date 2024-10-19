import React from "react";

const equipmentData = [
  {
    equipmentName: "Excavator",
    dateIn: "2024-10-15",
    dateOut: "2024-10-18",
    timeIn: "08:00 AM",
    timeOut: "04:00 PM",
    project: "Project A - Drainage",
    handledByIn: "John Doe",
    handledByOut: "Jane Smith",
    qrCode: "https://via.placeholder.com/100x100?text=QR+Code", 
    equipmentImage: "https://via.placeholder.com/150x150?text=Equipment+Image", 
  },
  {
    equipmentName: "Bulldozer",
    dateIn: "2024-10-16",
    dateOut: "2024-10-19",
    timeIn: "09:00 AM",
    timeOut: "05:00 PM",
    project: "Project B - Road Construction",
    handledByIn: "Michael Brown",
    handledByOut: "Emily Johnson",
    qrCode: "https://via.placeholder.com/100x100?text=QR+Code",
    equipmentImage: "https://via.placeholder.com/150x150?text=Equipment+Image",
  },
];

const Check = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 rounded-lg p-5 shadow-lg w-full max-w-4xl">

        <h1 className="text-3xl font-bold mb-5 text-center">Equipment List</h1>

        <table className="min-w-full bg-white rounded-lg shadow-md text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Equipment
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                QR Code
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Date In
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Date Out
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Time In
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Time Out
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Project
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Who In
              </th>
              <th className="py-2 px-4 bg-green-400 text-white font-semibold">
                Who Out
              </th>
            </tr>
          </thead>
          <tbody>
            {equipmentData.map((equipment, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6 text-center">
                  <img
                    src={equipment.equipmentImage}
                    alt={`${equipment.equipmentName}`}
                    className="mx-auto w-24 h-24 object-cover rounded-lg shadow-sm mb-2"
                  />
                  <p className="font-medium text-blue-500">
                    {equipment.equipmentName}
                  </p>{" "}
                </td>
                <td className="py-4 px-6 text-center">
                  <img
                    src={equipment.qrCode}
                    alt="QR Code"
                    className="mx-auto w-16 h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="py-4 px-6 text-blue-500">{equipment.dateIn}</td>{" "}
                <td className="py-4 px-6 text-blue-500">
                  {equipment.dateOut}
                </td>{" "}
                <td className="py-4 px-6 text-blue-500">
                  {equipment.timeIn}
                </td>{" "}
                <td className="py-4 px-6 text-blue-500">
                  {equipment.timeOut}
                </td>{" "}
                <td className="py-4 px-6 text-blue-500">
                  {equipment.project}
                </td>{" "}
                <td className="py-4 px-6 text-blue-500">
                  {equipment.handledByIn}
                </td>{" "}
                <td className="py-4 px-6 text-blue-500">
                  {equipment.handledByOut}
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Check;
