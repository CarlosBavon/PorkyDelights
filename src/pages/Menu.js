import React from "react";
import "../styles/Menu.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addToFavorites, addToCart } from "../utils/storageUtils";
import Toast from "../components/Toast";

import PorkChops from '../images/pork-chops.jpeg'
import PorkRibs from '../images/pork-ribs.jpeg'
import PorkBelly from '../images/pork-belly.jpeg'
import PorkTenderloin from '../images/pork-tenderloin.jpeg'
import PorkShoulder from '../images/pork-shoulder.jpeg'
import PorkLoin from '../images/pork-loin.jpeg'
import BabyBackRibs from '../images/baby-black-ribs.jpeg'
import PorkHock from '../images/pock-hock.jpeg'
import PorkJowl from '../images/pork-jowl.jpeg'
import PorkTrotters from '../images/pork-trotters.jpeg'

import Bacon from '../images/bacon.jpeg'
import Ham from '../images/ham.jpeg'
import Prosciutto from '../images/prosciutto.jpeg'
import Salami from '../images/salami.jpeg'
import Sausages from '../images/sausages.jpeg'
import SmokedHam from '../images/Smoked Ham.jpeg'
import HotDog from '../images/hotdog.jpeg'
import BaconBits from '../images/bacon-bits.jpeg'
import SausageBits from '../images/sausage-bits.jpeg'
import Pepperoni from '../images/pepperoni.jpeg'

import PulledPork from '../images/pulled-pork.jpeg'
import Carnitas from '../images/carnitas.jpeg'
import Lechon from '../images/lechon.jpeg'
import CharSiu from '../images/char-siu.jpeg'
import Tonkatsu from '../images/tonkatsu.jpeg'
import PorkDumplings from '../images/pork-dumplings.jpeg'
import PorkRinds from '../images/pork-rinds.jpeg'
import Cassoulet from '../images/cassoulet.jpeg'
import Feijoada from '../images/feijoada.jpeg'
import Sisig from '../images/sisig.jpeg'

const freshporkcuts = [
  {
    name: "Pork Chop",
    price: 900,
    image: PorkChops,
    description: "Juicy, grilled pork chop seasoned to perfection."
  },
  {
    name: "Pork Ribs",
    price: 600,
    image: PorkRibs,
    description: "Tender ribs glazed in sticky BBQ sauce."
  },
  {
    name: "Pork Belly",
    price: 750,
    image: PorkBelly,
    description: "Soft and tender pork belly, perfect for grilling."
  },
  {
    name: "Pork Tenderloin",
    price: 1200,
    image: PorkTenderloin,
    description: "Savory tenderloin, a classic pork cut."
  },
  {
    name: "Pork Shoulder",
    price: 700,
    image: PorkShoulder,
    description: "Flavorful pork shoulder, a hearty option."
  },
  {
    name: "Pork Loin",
    price: 1000,
    image: PorkLoin,
    description: "Rich and flavorful pork loin, a hearty option."
  },
  {
    name: "Baby Back Ribs",
    price: 850,
    image: BabyBackRibs,
    description: "Soft and tender baby back ribs, perfect for grilling."
  },
  {
    name: "Pork Hocks",
    price: 450,
    image: PorkHock,
    description: "Tender pork hocks, a classic pork cut."
  },
  {
    name: "Pork Jowls",
    price: 500,
    image: PorkJowl,
    description: "Soft and tender pork jowls, perfect for grilling."
  },
  {
    name: "Pork Trotters",
    price: 350,
    image: PorkTrotters,
    description: "Flavorful pork trotters, a hearty option."
  },
];

const processedPork = [
  {
    name: "Bacon (per 100g)",
    price: 300,
    image: Bacon,
    description: "Smoky bacon seasoned with a blend of spices."
  },
  {
    name: "Ham (per kg)",
    price: 1500,
    image: Ham,
    description: "Juicy, smoked ham seasoned to perfection."
  },
  {
    name: "Prosciutto (per 100g)",
    price: 750,
    image: Prosciutto,
    description: "Flavorful prosciutto, a classic Italian ham."
  },
  {
    name: "Salami (per 100g)",
    price: 350,
    image: Salami,
    description: "Juicy, salami seasoned to perfection."
  },
  {
    name: "Sausages (per kg)",
    price: 1100,
    image: Sausages,
    description: "Juicy, sausages seasoned to perfection."
  },
  {
    name: "Smoked Ham (per kg)",
    price: 1300,
    image: SmokedHam,
    description: "Juicy, smoked ham seasoned to perfection."
  },
  {
    name: "Hot Dogs / Frankfurters (per pack of 6)",
    price: 450,
    image: HotDog,
    description: "Juicy, hot dogs seasoned to perfection."
  },
  {
    name: "Bacon Bits (per 100g)",
    price: 250,
    image: BaconBits,
    description: "Juicy, bacon bits seasoned to perfection."
  },
  {
    name: "Sausage Bits (per 100g)",
    price: 300,
    image: SausageBits,
    description: "Juicy, sausage bits seasoned to perfection."
  },
  {
    name: "Pepperoni (per 100g)",
    price: 400,
    image: Pepperoni,
    description: "Juicy, pepperoni seasoned to perfection."
  },
]

const internationalPork = [
  {
    name: "Pulled Pork",
    price: 1200,
    image: PulledPork,
    description: "Slow-cooked, shredded pork."
  },
  {
    name: "Carnitas",
    price: 1000,
    image: Carnitas,
    description: "Mexican braised & fried pork."
  },
  {
    name: "Lechón (whole pig)",
    price: 22000,
    image: Lechon,
    description: "Whole roasted pig (popular in Spain/Philippines)."
  },
  {
    name: "Char Siu (per kg)",
    price: 1600,
    image: CharSiu,
    description: "Chinese BBQ pork, marinated & grilled."
  },
  {
    name: "Tonkatsu",
    price: 1300,
    image: Tonkatsu,
    description: "Japanese breaded pork cutlet."
  },
  {
    name: "Pork Dumplings (per piece)",
    price: 100,
    image: PorkDumplings,
    description: "Chinese dumplings filled with minced pork."
  },
  {
    name: "Pork Rinds (per bag)",
    price: 350,
    image: PorkRinds,
    description: "Pork rinds, fried pork skin."
  },
  {
    name: "Cassoulet",
    price: 1500,
    image: Cassoulet,
    description: "French stew with pork, beef, and vegetables."
  },
  {
    name: "Feijoada",
    price: 1200,
    image: Feijoada,
    description: "Brazilian stew with pork, beans, and vegetables."
  },
  {
    name: "Sisig",
    price: 900,
    image: Sisig,
    description: "Filipino stew with pork, vegetables, and spices."
  }
]


const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (dish) => {
    navigate("/dish/" + dish.name.toLowerCase().replace(/\s/g, "-"), {
      state: { dish }
    });
  };
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000); // hide after 2s
  };
  
  return (
    
    <div className="menu-page">
      <div className="cart-favs">
        <Link to="/cart" className="cart-btn">
          <button className="view-cart-btn">View Cart 🛒</button>
        </Link>
        <Link to="/favorites" className="favorites-btn">
          <button className="view-favorites-btn">View Favorites 🎉</button>
        </Link>
      </div>

      <h1>Our Porky Menu</h1>

      <h4>Fresh Pork Cuts & Products (Per Kg):</h4>
      <div className="menu-grid">
        {freshporkcuts.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

          <div className="menu-price">
            <p className="price">KES {dish.price}</p>
            <div className="menu-buttons">
              <button
                className="favs-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents navigating to detail page
                  addToFavorites(dish);
                  showToast(`${dish.name} Added to Favorites ❤️`);
                }}
              >
                ❤️
              </button>
              <button
                className="cartt-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(dish);
                  showToast(`${dish.name} Added to Cart 🛒`)    
                }}
              >
                🛒
              </button>
            </div>
          </div>

        </div>
      ))}
      </div>

      <h4>Processed Pork Products:</h4>
      <div className="menu-grid">
        {processedPork.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

          <div className="menu-price">
            <p className="price">KES {dish.price}</p>
            <div className="menu-buttons">
              <button
                className="favs-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents navigating to detail page
                  addToFavorites(dish);
                  showToast(`${dish.name} Added to Favorites ❤️`);
                }}
              >
                ❤️
              </button>
              <button
                className="cartt-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(dish);
                  showToast(`${dish.name} Added to Cart 🛒`)    
                }}
              >
                🛒
              </button>
            </div>
          </div>

        </div>
      ))}
      </div>

      <h4>International Pork Dishes (Per Serving):</h4>
      <div className="menu-grid">
        {internationalPork.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

          <div className="menu-price">
            <p className="price">KES {dish.price}</p>
            <div className="menu-buttons">
              <button
                className="favs-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents navigating to detail page
                  addToFavorites(dish);
                  showToast(`${dish.name} Added to Favorites ❤️`);
                }}
              >
                ❤️
              </button>
              <button
                className="cartt-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(dish);
                  showToast(`${dish.name} Added to Cart 🛒`)    
                }}
              >
                🛒
              </button>
            </div>
          </div>
          
        </div>
      ))}
      </div>

      {toastMessage && <Toast message={toastMessage} />}

    </div>
  );
};

export default Menu;
