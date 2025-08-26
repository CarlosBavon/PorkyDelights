// src/pages/Menu.js
import React, { useState } from "react";
import "../mobileStyles/MenuTab.css";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../utils/storageUtils";
import Toast from "../components/Toast";

import PorkChops from "../images/pork-chops.jpeg";
import PorkRibs from "../images/pork-ribs.jpeg";
import PorkBelly from "../images/pork-belly.jpeg";
import PorkTenderloin from "../images/pork-tenderloin.jpeg";
import PorkShoulder from "../images/pork-shoulder.jpeg";
import PorkLoin from "../images/pork-loin.jpeg";
import BabyBackRibs from "../images/baby-black-ribs.jpeg";
import PorkHock from "../images/pock-hock.jpeg";
import PorkJowl from "../images/pork-jowl.jpeg";
import PorkTrotters from "../images/pork-trotters.jpeg";

import Bacon from "../images/bacon.jpeg";
import Ham from "../images/ham.jpeg";
import Prosciutto from "../images/prosciutto.jpeg";
import Salami from "../images/salami.jpeg";
import Sausages from "../images/sausages.jpeg";
import SmokedHam from "../images/Smoked Ham.jpeg";
import HotDog from "../images/hotdog.jpeg";
import BaconBits from "../images/bacon-bits.jpeg";
import SausageBits from "../images/sausage-bits.jpeg";
import Pepperoni from "../images/pepperoni.jpeg";

import PulledPork from "../images/pulled-pork.jpeg";
import Carnitas from "../images/carnitas.jpeg";
import Lechon from "../images/lechon.jpeg";
import CharSiu from "../images/char-siu.jpeg";
import Tonkatsu from "../images/tonkatsu.jpeg";
import PorkDumplings from "../images/pork-dumplings.jpeg";
import PorkRinds from "../images/pork-rinds.jpeg";
import Cassoulet from "../images/cassoulet.jpeg";
import Feijoada from "../images/feijoada.jpeg";
import Sisig from "../images/sisig.jpeg";

const freshporkcuts = [
  {
    name: "Pork Chop",
    price: 900,
    image: PorkChops,
    description: "Juicy, grilled pork chop.",
  },
  {
    name: "Pork Ribs",
    price: 600,
    image: PorkRibs,
    description: "Tender ribs glazed in sticky BBQ.",
  },
  {
    name: "Pork Belly",
    price: 750,
    image: PorkBelly,
    description: "Soft and tender pork belly.",
  },
  {
    name: "Pork Tenderloin",
    price: 1200,
    image: PorkTenderloin,
    description: "Savory tenderloin, a classic pork cut.",
  },
  {
    name: "Pork Shoulder",
    price: 700,
    image: PorkShoulder,
    description: "Flavorful pork shoulder.",
  },
  {
    name: "Pork Loin",
    price: 1000,
    image: PorkLoin,
    description: "Rich and flavorful pork loin.",
  },
  {
    name: "Baby Back Ribs",
    price: 850,
    image: BabyBackRibs,
    description: "Soft and tender baby back ribs.",
  },
  {
    name: "Pork Hocks",
    price: 450,
    image: PorkHock,
    description: "Tender pork hocks, a classic pork cut.",
  },
  {
    name: "Pork Jowls",
    price: 500,
    image: PorkJowl,
    description: "Soft and tender pork jowls.",
  },
  {
    name: "Pork Trotters",
    price: 350,
    image: PorkTrotters,
    description: "Flavorful pork trotters.",
  },
];

const processedPork = [
  {
    name: "Bacon (per 100g)",
    price: 300,
    image: Bacon,
    description: "Smoky seasoned bacon.",
  },
  {
    name: "Ham (per kg)",
    price: 1500,
    image: Ham,
    description: "Juicy, smoked ham seasoned.",
  },
  {
    name: "Prosciutto (100g)",
    price: 750,
    image: Prosciutto,
    description: "Flavorful prosciutto, a classic ham.",
  },
  {
    name: "Salami (100g)",
    price: 350,
    image: Salami,
    description: "Juicy, salami seasoned.",
  },
  {
    name: "Sausages (kg)",
    price: 1100,
    image: Sausages,
    description: "Juicy, sausages seasoned.",
  },
  {
    name: "Smoked Ham",
    price: 1300,
    image: SmokedHam,
    description: "Juicy, smoked ham seasoned.",
  },
  {
    name: "Hot Dogs",
    price: 450,
    image: HotDog,
    description: "Juicy, hot dogs seasoned.",
  },
  {
    name: "Bacon Bits (100g)",
    price: 250,
    image: BaconBits,
    description: "Juicy, bacon bits seasoned.",
  },
  {
    name: "Sausage Bits",
    price: 300,
    image: SausageBits,
    description: "Juicy, sausage bits seasoned.",
  },
  {
    name: "Pepperoni (100g)",
    price: 400,
    image: Pepperoni,
    description: "Juicy, pepperoni seasoned.",
  },
];

const internationalPork = [
  {
    name: "Pulled Pork",
    price: 1200,
    image: PulledPork,
    description: "Slow-cooked, shredded pork.",
  },
  {
    name: "Carnitas",
    price: 1000,
    image: Carnitas,
    description: "Mexican braised & fried pork.",
  },
  {
    name: "Lechón (whole pig)",
    price: 22000,
    image: Lechon,
    description: "Whole roasted pig.",
  },
  {
    name: "Char Siu (per kg)",
    price: 1600,
    image: CharSiu,
    description: "Chinese BBQ pork, marinated.",
  },
  {
    name: "Tonkatsu",
    price: 1300,
    image: Tonkatsu,
    description: "Japanese breaded pork cutlet.",
  },
  {
    name: "Pork Dumplings",
    price: 100,
    image: PorkDumplings,
    description: "Chinese dumplings with minced pork.",
  },
  {
    name: "Pork Rinds (bag)",
    price: 350,
    image: PorkRinds,
    description: "Pork rinds, fried pork skin.",
  },
  {
    name: "Cassoulet",
    price: 1500,
    image: Cassoulet,
    description: "French stew with pork.",
  },
  {
    name: "Feijoada",
    price: 1200,
    image: Feijoada,
    description: "Brazilian stew with vegetables.",
  },
  {
    name: "Sisig",
    price: 900,
    image: Sisig,
    description: "Filipino stew with pork, vegetables.",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (dish) => {
    navigate("/dish/" + dish.name.toLowerCase().replace(/\s/g, "-"), {
      state: { dish },
    });
  };
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000); // hide after 2s
  };

  return (
    <div className="mobile-menu-page">
      <h1>Our Porky Menu</h1>

      <h4 className="mobile-menu-title">
        Fresh Pork Cuts & Products (Per Kg):
      </h4>
      <div className="mobile-menu-grid">
        {freshporkcuts.map((dish, index) => (
          <div
            className="mobile-menu-card"
            key={index}
            onClick={() => handleClick(dish)}
          >
            <img
              className="mobile-menu-card-image"
              src={dish.image}
              alt={dish.name}
            />
            <h2 className="mobile-menu-card-name">{dish.name}</h2>
            <p className="mobile-menu-card-description">{dish.description}</p>

            <div className="mobile-menu-price">
              <p className="mobile-menu-card-price">KES {dish.price}</p>
              <div>
                <div className="tooltip">
                  <button
                    className="mobile-cartt-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(dish);
                      showToast(`${dish.name} Added to Cart 🛒`);
                    }}
                  >
                    Add to Cart
                  </button>
                  <span className="tooltiptext">Add to Cart</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mobile-menu-title">Processed Pork Products:</h4>
      <div className="mobile-menu-grid">
        {processedPork.map((dish, index) => (
          <div
            className="mobile-menu-card"
            key={index}
            onClick={() => handleClick(dish)}
          >
            <img
              className="mobile-menu-card-image"
              src={dish.image}
              alt={dish.name}
            />
            <h2 className="mobile-menu-card-name">{dish.name}</h2>
            <p className="mobile-menu-card-description">{dish.description}</p>

            <div className="mobile-menu-price">
              <p className="mobile-menu-card-price">KES {dish.price}</p>
              <div>
                <div className="tooltip">
                  <button
                    className="mobile-cartt-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(dish);
                      showToast(`${dish.name} Added to Cart 🛒`);
                    }}
                  >
                    Add to Cart
                  </button>
                  <span className="tooltiptext">Add to Cart</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mobile-menu-title">
        International Pork Dishes (Per Serving):
      </h4>
      <div className="mobile-menu-grid">
        {internationalPork.map((dish, index) => (
          <div
            className="mobile-menu-card"
            key={index}
            onClick={() => handleClick(dish)}
          >
            <img
              className="mobile-menu-card-image"
              src={dish.image}
              alt={dish.name}
            />
            <h2 className="mobile-menu-card-name">{dish.name}</h2>
            <p className="mobile-menu-card-description">{dish.description}</p>

            <div className="mobile-menu-price">
              <p className="mobile-menu-card-price">KES {dish.price}</p>
              <div>
                <div className="tooltip">
                  <button
                    className="mobile-cartt-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(dish);
                      showToast(`${dish.name} Added to Cart 🛒`);
                    }}
                  >
                    Add to Cart
                  </button>
                  <span className="tooltiptext">Add to Cart</span>
                </div>
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
