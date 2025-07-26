import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { MdRestaurantMenu } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { FaRegQuestionCircle } from 'react-icons/fa';
import "../styles/BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-item">
        <AiFillHome size={34} />
      </Link>
      <Link to="/menu" className="nav-item">
        <MdRestaurantMenu size={34} />
      </Link>
      <Link to="/contact" className="nav-item">
        <IoIosCall size={34} />
      </Link>
    </div>
  );
};

export default BottomNavBar;
