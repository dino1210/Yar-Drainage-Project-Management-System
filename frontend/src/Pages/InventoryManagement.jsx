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

  const [showModal, setShowModal] = useState(false);

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
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Item
        </button>
      </div>
      <InventoryTable data={items} />
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
