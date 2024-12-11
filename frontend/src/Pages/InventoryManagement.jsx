import React, { useState } from 'react';
import InventoryTable from '../components/inventory/InventoryTable';
import AddInventory from '../components/inventory/AddInventory';

const InventoryManagement = () => {
  const [items, setItems] = useState([
    {
      category: 'Welding Machine',
      items: [
        {
          id: 1,
          description: 'Contender Welding Machine',
          tag: 'POWER-WLDGM_CONTNDR-1',
          totalQty: 10,
          unit: 'unit',
          onHand: 3,
          out: 7,
          remarks: '7 defective',
        },
      ],
    },
    {
      category: 'Angle Grinder',
      items: [
        {
          id: 2,
          description: 'Dartek Angle Grinder',
          tag: 'POWER-ANGLGNDR_DARTEK-1',
          totalQty: 1,
          unit: 'unit',
          onHand: 1,
          out: 0,
          remarks: '',
        },
      ],
    },
  ]);

  const [filteredItems, setFilteredItems] = useState(items);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    const lowerSearch = e.target.value.toLowerCase();
    setSearch(lowerSearch);

    const newFilteredItems = items.map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.description.toLowerCase().includes(lowerSearch) ||
          item.tag.toLowerCase().includes(lowerSearch)
      ),
    }));

    setFilteredItems(newFilteredItems);
  };

  const handleAddItem = (newItem) => {
    const updatedItems = [...items];
    const categoryIndex = updatedItems.findIndex(
      (cat) => cat.category === newItem.category
    );

    if (categoryIndex !== -1) {
      updatedItems[categoryIndex].items.push(newItem);
    } else {
      updatedItems.push({
        category: newItem.category,
        items: [newItem],
      });
    }

    setItems(updatedItems);
    setFilteredItems(updatedItems); // Ensure filteredItems is updated as well
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

      {/* Search and Add New Item Section */}
      <div className="flex items-center mb-6 space-x-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search items..."
          className="flex-1 px-4 py-2 border rounded shadow-sm"
        />
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-[#800020] text-white rounded hover:bg-[#800020] shadow h-full"
        >
          Add New Item
        </button>
      </div>

      {/* Inventory Table */}
      <InventoryTable data={filteredItems} />

      {/* Add Inventory Modal */}
      {showModal && (
        <AddInventoryModal
          onClose={() => setShowModal(false)}
          onSave={handleAddItem}
        />
      )}
    </div>
  );
};

export default InventoryManagement;
