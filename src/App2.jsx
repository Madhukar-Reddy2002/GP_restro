import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const menuItems = [
    {
      category: 'Veg Starters',
      items: [
        { id: 1, name: 'Paneer Tikka', price: 150 },
        { id: 2, name: 'Vegetable Pakora', price: 100 },
        { id: 3, name: 'Hara Bhara Kabab', price: 120 },
      ],
    },
    {
      category: 'Non-Veg Starters',
      items: [
        { id: 4, name: 'Chicken Pakoda', price: 180 },
        { id: 5, name: 'Chilli Chicken', price: 230 },
        { id: 6, name: 'Chicken 65', price: 240 },
        { id: 7, name: 'Dragon Chicken', price: 260 },
        { id: 8, name: 'Chicken Drumsticks', price: 250 },
        { id: 9, name: 'Chicken Majestic', price: 290 },
        { id: 10, name: 'Chicken Kaju Pakodi', price: 300 },
        { id: 11, name: 'Chicken Manchurian', price: 250 },
        { id: 12, name: 'Chicken Lollipops', price: 250 },
        { id: 13, name: 'Chicken Mughalai', price: 260 },
      ],
    },
    {
      category: 'Veg Biriyanis',
      items: [
        { id: 14, name: 'Vegetable Biryani', price: 180 },
        { id: 15, name: 'Paneer Biryani', price: 200 },
      ],
    },
    {
      category: 'Non-Veg Biriyanis',
      items: [
        { id: 16, name: 'Dum Biryani(half)', price: 150 },
        { id: 17, name: 'Dum Biryani(full)', price: 250 },
        { id: 18, name: 'Mughalai Biryani(half)', price: 160 },
        { id: 19, name: 'Mughalai Biryani(full)', price: 260 },
        { id: 20, name: 'Fry-Peice Biryani(half)', price: 160 },
        { id: 21, name: 'Fry-Peice Biryani(full)', price: 260 },
        { id: 22, name: 'Potlam Biryani', price: 260 },
        { id: 23, name: 'Boneless Biryani', price: 270 },
        { id: 24, name: 'G&P Biryani (spl)', price: 290 },
        { id: 25, name: 'Chilli Chicken Biryani', price: 260 },
      ],
    },
  ];

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      setNotification({ type: 'increment', item: item.name, quantity: existingItem.quantity + 1 });
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      setNotification({ type: 'add', item: item.name, quantity: 1 });
    }
  };

  const removeFromCart = (itemId) => {
    const itemToRemove = cartItems.find((item) => item.id === itemId);
    if (itemToRemove.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
      setNotification({ type: 'decrement', item: itemToRemove.name, quantity: itemToRemove.quantity - 1 });
    } else {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
      setNotification({ type: 'remove', item: itemToRemove.name, quantity: 0 });
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setNotification(null);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNotification(null);
  };

  return (
    <div className='bg-gradient-to-br from-black/90 to-black/70'>
      {/* Header */}
      <header className="bg-gradient-to-br from-red-700/90 to-red-600/70  text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">GP-Restro</h1>
        </div>
      </header>

      <div>
        <h1 className="text-3xl font-bold text-center mb-8 text-brandWhite">Menu</h1>
        <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-full p-3 cursor-pointer" onClick={() => setIsModalOpen(true)}>
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
          {cartItems.length > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </div>
          )}
        </div>
        {notification && (
          <div className=" bg-white fixed top-4 right-4 shadow-lg rounded-full px-4 py-2 flex items-center text-sm">
            {notification.type === 'add'
              ? `Added ${notification.item} (${notification.quantity})`
              : notification.type === 'increment'
              ? `Increased ${notification.item} to ${notification.quantity}`
              : `Removed ${notification.item}`}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row">
          {menuItems.map((category, index) => (
            <div key={index} className="mb-8 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold mb-4 text-brandWhite">{category.category}</h2>
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-gray-100 p-4 rounded-md shadow-md transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                    cartItems.find((cartItem) => cartItem.id === item.id)
                      ? 'border-4 border-green-500'
                      : ''
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span>{item.name}</span>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-full mr-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>
                        {cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
                      </span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-full ml-2"
                        onClick={() => addToCart(item)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <span className="ml-2">{item.price}₹</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Cart Modal"
          className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto sm:w-full"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
        >
          <animated.div style={modalStyles}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Cart</h2>
              <button
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={clearCart}
              >
                <FontAwesomeIcon icon={faTrash} className="text-xl" />
              </button>
              <a
                href="upi://pay?pa=paytmqr1xchtothpc@paytm&pn=Paytm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Pay
              </a>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={handleCloseModal}
              />
            </div>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap items-center mb-4"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500">
                        {item.quantity} x {item.price}₹
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-full mr-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{item.quantity * item.price}₹</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-full ml-2"
                        onClick={() => addToCart(item)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4">
                  <p className="font-medium">Total: {getTotalAmount()}₹</p>
                </div>
              </div>
            )}
          </animated.div>
        </Modal>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto">
          <p className="text-center">
            Best South Indian Restaurant near Lawgate, LPU, Jalandhar, Punjab. <br />
            "Good food is all the sweeter when shared with good friends."  <br />
            Follow us on Instagram: @gp_restro | Contact us on WhatsApp: +91 XXXXXXXXXX
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;