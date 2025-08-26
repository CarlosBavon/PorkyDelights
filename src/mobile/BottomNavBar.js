import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
import { FaInfoCircle as FaAbout } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import "../styles/BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-item">
        <AiFillHome size={30} />
      </Link>
      <Link to="/cart" className="nav-item">
        <FaShoppingCart size={30} />
      </Link>
      <Link to="/contact" className="nav-item">
        <IoIosCall size={30} />
      </Link>
      <Link to="/about" className="nav-item">
        <FaAbout size={30} />
      </Link>
    </div>
  );
};

export default BottomNavBar;
