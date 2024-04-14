import React, { useState } from 'react';

const Menu = ({ menuItems, addToCart }) => {
  const [filter, setFilter] = useState('');

  // Categories for filtering
  const categories = [
    { key: 'all', name: 'All' },
    { key: 'NON_VEG_STARTERS', name: 'Non-Veg Starters' },
    { key: 'NON_VEG_BIRIYANIS', name: 'Non-Veg Biryanis' },
    { key: 'MANDIS', name: 'Mandis' },
    { key: 'FRIED_RICES', name: 'Fried Rices' },
  ];

  // Filtered menu items
  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <div className="menu-container p-4">
      {/* Category filter buttons */}
      <div className="flex flex-wrap mb-4">
        {categories.map(category => (
          <button
            key={category.key}
            onClick={() => setFilter(category.key)}
            className={`px-4 py-2 m-1 rounded bg-blue-500 text-white ${filter === category.key ? 'bg-blue-700' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu items list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item p-4 border rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold">{item.name} - ${item.price}</h3>
            <p>{item.description}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500">No items found in this category.</p>
      )}
    </div>
  );
};

export default Menu;
