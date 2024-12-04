import React, { useState } from "react";

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Inventory Data
  const inventory = [
    {
      id: 1,
      name: "Contender Welding Machine",
      category: "Welding Machine",
      productCode: "POWER-WLDGM_CONTNDR-1",
      quantity: 10,
      unit: "pcs",
      status: "Available",
      remarks: "Good Condition",
      notes: "Annual Maintenance Required",
      site: "Project A",
      returned: 2,
      issued: 8,
    },
    {
      id: 2,
      name: "Makita Vertical Grinder",
      category: "Vertical Grinder",
      productCode: "POWER-VRTCLGRNDR_MKTA-1",
      quantity: 5,
      unit: "pcs",
      status: "In Use",
      remarks: "Used on-site",
      notes: "Maintenance Scheduled",
      site: "Project B",
      returned: 1,
      issued: 4,
    },
    {
      id: 3,
      name: "Makita Pencil Grinder",
      category: "Pencil Grinder",
      productCode: "POWER-PNCLGRNDR_MKTA-1",
      quantity: 8,
      unit: "pcs",
      status: "Available",
      remarks: "Good Condition",
      notes: "",
      site: "Project C",
      returned: 2,
      issued: 6,
    },
    {
      id: 4,
      name: "Bosch Circular Saw",
      category: "Circular Saw",
      productCode: "POWER-CRCLRSAW_BSCH-1",
      quantity: 3,
      unit: "pcs",
      status: "Maintenance",
      remarks: "Needs Repair",
      notes: "Motor issue",
      site: "Project D",
      returned: 1,
      issued: 2,
    },
    {
      id: 5,
      name: "Stihl Chainsaw",
      category: "Chainsaw",
      productCode: "POWER-CHNSAW_STHL-2",
      quantity: 4,
      unit: "pcs",
      status: "In Use",
      remarks: "Used on-site",
      notes: "Blade replacement due soon",
      site: "Project A",
      returned: 1,
      issued: 3,
    },
    // Add more items here
  ];

  // Categories for Filtering
  const categories = [
    "All",
    "Welding Machine",
    "Vertical Grinder",
    "Pencil Grinder",
    "Circular Saw",
    "Chainsaw",
    // Add more categories as needed
  ];

  // Filtered Inventory
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Inventory Management System
        </h1>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or code..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Product Code</th>
              <th className="py-3 px-4 text-right">Quantity</th>
              <th className="py-3 px-4">Unit</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Remarks</th>
              <th className="py-3 px-4">Notes</th>
              <th className="py-3 px-4">Site</th>
              <th className="py-3 px-4 text-right">Returned</th>
              <th className="py-3 px-4 text-right">Issued</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.length > 0 ? (
              filteredInventory.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition-all duration-300"
                >
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{item.productCode}</td>
                  <td className="py-3 px-4 text-right">{item.quantity}</td>
                  <td className="py-3 px-4">{item.unit}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : item.status === "In Use"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.remarks}</td>
                  <td className="py-3 px-4">{item.notes}</td>
                  <td className="py-3 px-4">{item.site}</td>
                  <td className="py-3 px-4 text-right">{item.returned}</td>
                  <td className="py-3 px-4 text-right">{item.issued}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="11"
                  className="text-center py-4 text-gray-500 font-medium"
                >
                  No inventory items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;
