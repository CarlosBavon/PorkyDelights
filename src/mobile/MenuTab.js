// src/pages/Menu.js
import React, { useState } from 'react';
import '../mobileStyles/MenuTab.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const porkItems = [
  {
    id: 1,
    name: 'Grilled Pork Chops',
    price: 'Ksh 450',
    image: '/images/porkchops.jpg',
    description: 'Smoky pork chops grilled to perfection.',
  },
  {
    id: 2,
    name: 'Pork Ribs',
    price: 'Ksh 600',
    image: '/images/ribs.jpg',
    description: 'Sticky, sweet and spicy slow-cooked ribs.',
  },
  {
    id: 3,
    name: 'Pork Sausages',
    price: 'Ksh 300',
    image: '/images/sausages.jpg',
    description: 'Juicy hand-crafted pork sausages.',
  },
  {
    id: 4,
    name: 'Pulled Pork Sandwich',
    price: 'Ksh 550',
    image: '/images/pulledpork.jpg',
    description: 'Loaded with saucy pulled pork and slaw.',
  },
];

const Menu = () => {
    const { addToCart } = useCart();
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = (item) => {
      addToCart(item);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // hide after 2 seconds
    };

  return (
    <div className="menu-container">
        <div className="menu-header">
            <h2 className="menu-title">🍖 Porky Delights Menu</h2>
            <div className="menu-icon">
                <Link to="/cart" className="cart-link">
                    <i class="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
        </div>

      <div className="menu-grid">
        {porkItems.map((item) => (
          <motion.div
            key={item.id}
            className="menu-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-description">{item.description}</p>
            <div className="menu-bottom">
              <span className="menu-price">{item.price}</span>
              <button onClick={() => handleAddToCart(item)} className="add-btn">Add</button>
            </div>
          </motion.div>
        ))}
        {showPopup && (
          <div className="popup">
            <p>✅ Added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
