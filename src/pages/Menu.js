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
    image: PorkChops,
    description: "Juicy, grilled pork chop seasoned to perfection."
  },
  {
    name: "Pork Ribs",
    image: PorkRibs,
    description: "Tender ribs glazed in sticky BBQ sauce."
  },
  {
    name: "Pork Belly",
    image: PorkBelly,
    description: "Soft and tender pork belly, perfect for grilling."
  },
  {
    name: "Pork Tenderloin",
    image: PorkTenderloin,
    description: "Savory tenderloin, a classic pork cut."
  },
  {
    name: "Pork Shoulder",
    image: PorkShoulder,
    description: "Flavorful pork shoulder, a hearty option."
  },
  {
    name: "Pork Loin",
    image: PorkLoin,
    description: "Rich and flavorful pork loin, a hearty option."
  },
  {
    name: "Baby Back Ribs",
    image: BabyBackRibs,
    description: "Soft and tender baby back ribs, perfect for grilling."
  },
  {
    name: "Pork Hocks",
    image: PorkHock,
    description: "Tender pork hocks, a classic pork cut."
  },
  {
    name: "Pork Jowls",
    image: PorkJowl,
    description: "Soft and tender pork jowls, perfect for grilling."
  },
  {
    name: "Pork Trotters",
    image: PorkTrotters,
    description: "Flavorful pork trotters, a hearty option."
  },
];

const processedPork = [
  {
    name: "Bacon",
    image: Bacon,
    description: "Smoky bacon seasoned with a blend of spices."
  },
  {
    name: "Ham",
    image: Ham,
    description: "Juicy, smoked ham seasoned to perfection."
  },
  {
    name: "Prosciutto",
    image: Prosciutto,
    description: "Flavorful prosciutto, a classic Italian ham."
  },
  {
    name: "Salami",
    image: Salami,
    description: "Juicy, salami seasoned to perfection."
  },
  {
    name: "Sausages",
    image: Sausages,
    description: "Juicy, sausages seasoned to perfection."
  },
  {
    name: "Smoked Ham",
    image: SmokedHam,
    description: "Juicy, smoked ham seasoned to perfection."
  },
  {
    name: "Hot Dogs / Frankfurters",
    image: HotDog,
    description: "Juicy, hot dogs seasoned to perfection."
  },
  {
    name: "Bacon Bits",
    image: BaconBits,
    description: "Juicy, bacon bits seasoned to perfection."
  },
  {
    name: "Sausage Bits",
    image: SausageBits,
    description: "Juicy, sausage bits seasoned to perfection."
  },
  {
    name: "Pepperoni",
    image: Pepperoni,
    description: "Juicy, pepperoni seasoned to perfection."
  },
]

const internationalPork = [
  {
    name: "Pulled Pork",
    image: PulledPork,
    description: "Slow-cooked, shredded pork."
  },
  {
    name: "Carnitas",
    image: Carnitas,
    description: "Mexican braised & fried pork."
  },
  {
    name: "Lechón",
    image: Lechon,
    description: "Whole roasted pig (popular in Spain/Philippines)."
  },
  {
    name: "Char Siu",
    image: CharSiu,
    description: "Chinese BBQ pork, marinated & grilled."
  },
  {
    name: "Tonkatsu",
    image: Tonkatsu,
    description: "Japanese breaded pork cutlet."
  },
  {
    name: "Pork Dumplings",
    image: PorkDumplings,
    description: "Chinese dumplings filled with minced pork."
  },
  {
    name: "Pork Rinds",
    image: PorkRinds,
    description: "Pork rinds, fried pork skin."
  },
  {
    name: "Cassoulet",
    image: Cassoulet,
    description: "French stew with pork, beef, and vegetables."
  },
  {
    name: "Feijoada",
    image: Feijoada,
    description: "Brazilian stew with pork, beans, and vegetables."
  },
  {
    name: "Sisig",
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

      <h4>Fresh Pork Cuts & Products:</h4>
      <div className="menu-grid">
        {freshporkcuts.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

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
      ))}
      </div>

      <h4>Processed Pork Products:</h4>
      <div className="menu-grid">
        {processedPork.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

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
      ))}
      </div>

      <h4>International Pork Dishes:</h4>
      <div className="menu-grid">
        {internationalPork.map((dish, index) => (
        <div className="menu-card" key={index} onClick={() => handleClick(dish)}>
          <img src={dish.image} alt={dish.name} />
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>

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
      ))}
      </div>

      {toastMessage && <Toast message={toastMessage} />}

    </div>
  );
};

export default Menu;
