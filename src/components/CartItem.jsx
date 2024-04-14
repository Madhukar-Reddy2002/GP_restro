import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <img src={item.image || '/default-food.png'} alt={item.name} className="w-16 h-16 mr-4 rounded" />
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <p className="text-gray-600">{item.quantity} x ${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
