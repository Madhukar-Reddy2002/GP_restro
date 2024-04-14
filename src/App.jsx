import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const menuItems = [
    {
      category: 'Crispy Starters',
      items: [
        { id: 1, name: 'Crispy Chicken Wings', price: 260 },
        { id: 2, name: 'Chicken Kodi Chips', price: 300 },
        { id: 3, name: 'Chicken Kurkure', price: 320 },
        { id: 4, name: 'Crispy Lollipop', price: 290 },
        { id: 5, name: 'KFC Chicken', price: 350 },
        { id: 6, name: 'Crispy Paneer', price: 290 },
        { id: 7, name: 'Paneer Kurkure', price: 300 },
        { id: 8, name: 'Chinese Paneer', price: 320 },
        { id: 9, name: 'Chinese Chicken', price: 350 },
      ],
    },
    {
      category: 'Curries (Non-Veg)',
      items: [
        { id: 10, name: 'Chicken Butter Masala (Half)', price: 230 },
        { id: 26, name: 'Chicken Butter Masala (Full)', price: 430 },

        { id: 11, name: 'Kadai Chicken (Half)', price: 230 },
        { id: 27, name: 'Kadai Chicken (Full)', price: 430 },

        { id: 12, name: 'Andhra Chicken Curry (Half)', price: 230 },
        { id: 28, name: 'Andhra Chicken Curry (Full)', price: 430 },

        { id: 13, name: 'Chicken Fry (Half)', price: 230 },
        { id: 29, name: 'Chicken Fry (Full)', price: 430 },

        { id: 14, name: 'Kolapur Chicken (Half)', price: 230 },
        { id: 30, name: 'Kolapur Chicken (Full)', price: 430 },

        { id: 15, name: 'Punjabi Chicken Curry (Half)', price: 230 },
        { id: 31, name: 'Punjabi Chicken Curry (Full)', price: 430 },

        { id: 16, name: 'Mutton Masala (Half)', price: 310 },
        { id: 32, name: 'Mutton Masala (Full)', price: 580 },

        { id: 17, name: 'Kadai Mutton (Half)', price: 260 },
        { id: 33, name: 'Kadai Mutton (Full)', price: 480 },

        { id: 18, name: 'Fish Curry (Half)', price: 270 },
        { id: 34, name: 'Fish Curry (Full)', price: 490 },

        { id: 19, name: 'Fish Fry (Half)', price: 260 },
        { id: 35, name: 'Fish Fry (Full)', price: 480 },

        { id: 20, name: 'Fish Roast (Half)', price: 270 },
        { id: 36, name: 'Fish Roast (Full)', price: 490 },

        { id: 21, name: 'Andhra Fish Pulusu (Half)', price: 270 },
        { id: 37, name: 'Andhra Fish Pulusu (Full)', price: 490 },

        { id: 22, name: 'Apollo Fish (Half)', price: 280 },
        { id: 38, name: 'Apollo Fish (Full)', price: 510 },

        { id: 23, name: 'Egg Curry', price: 100 },
        { id: 24, name: 'Masala Omelette', price: 50 },
        { id: 25, name: 'Egg Bhujiya', price: 60 },
      ],
    },
    {
      category: 'Veg Biryanis',
      items: [
        { id: 39, name: 'Veg Biryani', price: 180 },
        { id: 40, name: 'Mixed Veg Biryani', price: 200 },
        { id: 41, name: 'Paneer Biryani', price: 220 },
        { id: 42, name: 'Paneer Ghee Biryani', price: 230 },
        { id: 43, name: 'Special Paneer Biryani', price: 240 },
        { id: 44, name: 'Special Veg Biryani', price: 220 },
        { id: 45, name: 'Mushroom Biryani', price: 200 },
        { id: 46, name: 'Kaju Biryani', price: 290 },
      ],
    },
    {
      category: 'Special Veg Biryanis',
      items: [
        { id: 47, name: 'Raju Gari Pulao', price: 250 },
        { id: 48, name: 'Mastani Veg Pulao', price: 250 },
        { id: 49, name: 'GP Special Paneer Biryani', price: 260 },
      ],
    },
    {
      category: 'Veg Starters',
      items: [
        { id: 50, name: 'Veg Manchurian', price: 140 },
        { id: 51, name: 'Chilli Paneer', price: 220 },
        { id: 52, name: 'Paneer 65', price: 180 },
        { id: 53, name: 'Paneer Majestic', price: 230 },
        { id: 54, name: 'Paneer Manchurian', price: 200 },
        { id: 55, name: 'Mushroom Manchurian', price: 190 },
        { id: 56, name: 'Chilli Mushroom', price: 220 },
        { id: 57, name: 'Mushroom 65', price: 200 },
        { id: 58, name: 'French Fries', price: 110 },
      ],
    },
    {
      category: 'Veg Curries',
      items: [
        { id: 59, name: 'Mixed Veg Curry (Half)', price: 190 },
        { id: 67, name: 'Mixed Veg Curry (Full)', price: 340 },
        { id: 60, name: 'Methi Chaman (Half)', price: 250 },
        { id: 68, name: 'Methi Chaman (Full)', price: 450 },
        { id: 61, name: 'Mushroom Masala (Half)', price: 190 },
        { id: 69, name: 'Mushroom Masala (Full)', price: 360 },
        { id: 62, name: 'Kadai Mushroom (Half)', price: 200 },
        { id: 70, name: 'Kadai Mushroom (Full)', price: 360 },

        { id: 63, name: 'Paneer Butter Masala (Half)', price: 210 },
        { id: 71, name: 'Paneer Butter Masala (Full)', price: 380 },

        { id: 64, name: 'Kadai Paneer (Half)', price: 210 },
        { id: 72, name: 'Kadai Paneer (Full)', price: 390 },
        { id: 65, name: 'Paneer Kaju Curry (Half)', price: 300 },
        { id: 73, name: 'Paneer Kaju Curry (Full)', price: 540 },
        { id: 66, name: 'Kaju Tomato (Half)', price: 300 },
        { id: 74, name: 'Kaju Tomato (Full)', price: 540 },
      ],
    },
    {
      category: 'Breads',
      items: [
        { id: 75, name: 'Plain Naan', price: 25 },
        { id: 76, name: 'Butter Naan', price: 30 },
        { id: 77, name: 'Pulka', price: 7 },
        { id: 78, name: 'Roti', price: 8 },
        { id: 79, name: 'Butter Roti', price: 12 },
        { id: 80, name: 'Tandoori Roti', price: 10 },
      ],
    },
    {
      category: 'Fried Rice',
      items: [
        { id: 164, name: 'CHICKEN RICE BOWL', price: 180 },
        { id: 165, name: 'VEG FRIED RICE', price: 160 },
        { id: 166, name: 'EGG FRIED RICE', price: 180 },
        { id: 167, name: 'CHICKEN FRIED RICE', price: 220 },
        { id: 168, name: 'SPL CHICKEN FRIED RICE', price: 240 },
        { id: 169, name: 'MUSHROOM FRIED RICE', price: 180 },
        { id: 170, name: 'PANEER FRIED RICE', price: 180 },
        { id: 171, name: 'KAJU FRIED RICE', price: 250 },
        { id: 172, name: 'MIXED NON VEG FRIED RICE (Half)', price: 360 },
        { id: 173, name: 'MIXED NON VEG FRIED RICE (Full)', price: 360 },
      ],
    },
    {
      category: 'Non-Veg Starters',
      items: [
        { id: 100, name: 'CHICKEN PAKODA', price: 180 },
        { id: 101, name: 'CHILLI CHICKEN', price: 230 },
        { id: 102, name: 'CHICKEN 65', price: 240 },
        { id: 103, name: 'CHICKEN 555', price: 280 },
        { id: 104, name: 'DRAGON CHICKEN', price: 260 },
        { id: 105, name: 'CHICKEN DRUMSTICKS', price: 250 },
        { id: 106, name: 'CHICKEN MAJESTIC', price: 290 },
        { id: 107, name: 'CHICKEN KAJU PAKODI', price: 300 },
        { id: 108, name: 'CHICKEN MANCHURIAN', price: 250 },
        { id: 109, name: 'CHICKEN LOLLIPOPS', price: 250 },
        { id: 110, name: 'CHICKEN MUGHLAI', price: 260 },
        { id: 111, name: 'CHILLI EGG', price: 180 },
        { id: 112, name: 'EGG 65', price: 180 },
        { id: 113, name: 'CHILLI PRAWNS', price: 290 },
        { id: 114, name: 'PRAWNS 65', price: 290 },
      ],
    },
    {
      category: 'Non-Veg Special Starters',
      items: [
        { id: 115, name: 'GUNTUR CHICKEN', price: 290 },
        { id: 116, name: 'MONGOLIAN CHICKEN', price: 330 },
        { id: 117, name: 'RRR CHICKEN', price: 310 },
        { id: 118, name: 'LEMON CHICKEN', price: 330 },
        { id: 119, name: 'CHICKEN KEEMA BALLS', price: 360 },
        { id: 120, name: 'KONG KONG CHICKEN', price: 380 },
        { id: 121, name: 'MUTTON FRY', price: 290 },
        { id: 122, name: 'MUTTON KEEMA BALLS', price: 400 },
        { id: 123, name: 'MUTTON KEEMA CRISPY', price: 600 },
      ],
    },
    {
      category: 'Non-Veg Biryanis',
      items: [
        { id: 124, name: 'DUM BIRYANI (Half)', price: 150 },
        { id: 125, name: 'DUM BIRYANI (Full)', price: 250 },
        { id: 126, name: 'FRY PIECE BIRYANI (Half)', price: 160 },
        { id: 127, name: 'FRY PIECE BIRYANI (Full)', price: 260 },
        { id: 128, name: 'MUGHLAI BIRYANI (Half)', price: 160 },
        { id: 129, name: 'MUGHLAI BIRYANI (Full)', price: 260 },
        { id: 130, name: 'POTLAM BIRYANI', price: 260 },
        { id: 131, name: 'BONELESS CHICKEN BIRYANI', price: 270 },
        { id: 132, name: 'G&P SPL BIRYANI', price: 290 },
        { id: 133, name: 'CHILLI CHICKEN BIRYANI', price: 270 },
        { id: 134, name: 'CHICKEN65 BIRYANI', price: 270 },
        { id: 135, name: 'LOLLIPOP BIRYANI', price: 270 },
        { id: 136, name: 'BUTTER CHICKEN BIRYANI', price: 270 },
        { id: 137, name: 'CHICKEN JOINT BIRYANI', price: 290 },
        { id: 138, name: 'CHICKEN WINGS BIRYANI', price: 270 },
        { id: 139, name: 'CHICKEN TIKKA BIRYANI', price: 290 },
        { id: 140, name: 'KALMI CHICKEN BIRYANI', price: 290 },
        { id: 141, name: 'CHICKEN KEEMA BIRYANI', price: 290 },
        { id: 142, name: 'AVAKAI CHICKEN BIRYANI', price: 270 },
        { id: 143, name: 'EGG BIRYANI (Half)', price: 120 },
        { id: 144, name: 'EGG BIRYANI (Full)', price: 200 },
        { id: 145, name: 'EGG SCRAMBLED-BIRYANI', price: 250 },
        { id: 146, name: 'MUTTON BIRYANI', price: 330 },
        { id: 147, name: 'MUTTON MUGHLAI BIRYANI', price: 350 },
        { id: 148, name: 'CHETTINAD BIRYANI', price: 290 },
      ],
    },
    {
      category: "Mandi's (Dry/Juicy/Spl)",
      items: [
        { id: 149, name: 'MINI MANDI (Dry)', price: 240},
        { id: 174, name: 'MINI MANDI (Juicy)', price: 260 },
        { id: 175, name: 'MINI MANDI (Spl)', price: 280 },
        { id: 150, name: 'MEDIUM MANDI (Dry)', price: 420},
        { id: 176, name: 'MEDIUM MANDI (Juicy)', price: 460},
        { id: 177, name: 'MEDIUM MANDI (Spl)', price: 490},
        { id: 151, name: 'LARGE MANDI (Dry)', price: 630 },
        { id: 178, name: 'LARGE MANDI (Juicy)', price: 680 },
        { id: 179, name: 'LARGE MANDI (Spl)', price: 720 },
        { id: 152, name: 'JUMBO MANDI (Dry)', price: 830},
        { id: 180, name: 'JUMBO MANDI (Juicy)', price: 890},
        { id: 181, name: 'JUMBO MANDI (Spl)', price: 950},
      ],
    },
    {
      category: 'Non-Veg Special Biryanis',
      items: [
        { id: 153, name: 'KODI VEPUDU PULAO', price: 290 },
        { id: 154, name: 'RAJU GARI KODI PULAO', price: 300 },
        { id: 155, name: 'NAWABI BIRYANI', price: 340 },
        { id: 156, name: 'MASTHANI CHICKEN BIRYANI', price: 340 },
        { id: 157, name: 'MUTTON KEEMA BIRYANI', price: 320 },
        { id: 158, name: 'TANDOORI SINGLE JOINT BIRYANI', price: 300 },
        { id: 159, name: 'RAMBO BIRYANI', price: 350 },
        { id: 160, name: 'PRAWN BIRYANI', price: 290 },
        { id: 161, name: 'MIX NON-VEG BIRYANI', price: 390 },
        { id: 162, name: 'MURGH NIHARI BIRYANI', price: 390 },
        { id: 163, name: 'FULL KODI BIRRYANI (4 PERS)', price: 800 },
      ],
    }


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

  const modalStyles = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 300 },
  });

  return (
    <div className="bg-gradient-to-br from-black/90 to-black/70 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-br from-red-700/90 to-red-600/70 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">GP-Restro</h1>
        </div>
      </header>

      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-brandWhite">Menu</h1>
        <div
          className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-full p-3 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
          {cartItems.length > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </div>
          )}
        </div>
        {notification && (
          <div className="fixed top-4 right-4 z-50">
            <animated.div
              style={modalStyles}
              className={`shadow-lg rounded-full px-4 py-2 flex items-center text-sm ${
                notification.type === 'add'
                  ? 'bg-green-500 text-white'
                  : notification.type === 'increment'
                  ? 'bg-blue-500 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              {notification.type === 'add'
                ? `Added ${notification.item} (${notification.quantity})`
                : notification.type === 'increment'
                ? `Increased ${notification.item} to ${notification.quantity}`
                : `Removed ${notification.item}`}
            </animated.div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row">
          {/* Menu items rendering */}
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

        {/* Modal */}
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
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={clearCart}
              >
                <FontAwesomeIcon icon={faTrash} className="text-xl" />
              </button>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
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
                <div className="border-t pt-4 mt-4 flex items-center justify-between">
                  <p className="font-medium">Total: ₹{getTotalAmount()}
                  </p>
                  <a
                href="upi://pay?pa=paytmqr1xchtothpc@paytm&pn=Paytm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Pay
              </a>
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
            "Good food is all the sweeter when shared with good friends." <br />
            Follow us on Instagram: @gp_restro | Contact us on WhatsApp: +91 XXXXXXXXXX
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;