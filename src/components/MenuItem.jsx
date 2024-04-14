// MenuItem.js
import React from "react";

const MenuItem = ({ item }) => {
  const { name, description, price } = item;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-800 font-bold">${price.toFixed(2)}</p>
      <button className="bg-gray-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;
