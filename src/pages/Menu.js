import React, { useState, useCallback, memo } from "react";
import "../styles/Menu.css";
import { Link, useNavigate } from "react-router-dom";
import { addToFavorites, addToCart } from "../utils/storageUtils";
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
import Sirloin from "../images/Sirloin.jpeg";
import PorkButt from "../images/PorkButt.jpeg";

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
import Pancetta from "../images/Pancetta.jpeg";
import SerranoHam from "../images/SerranoHam.jpeg";

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
import TwiceCookedPork from "../images/TwiceCookedPork.jpeg";
import MooPing from "../images/MooPing.jpeg";

const freshporkcuts = [
  { name: "Pork Chop", price: 900, image: PorkChops, description: "Juicy, grilled pork chop seasoned to perfection." },
  { name: "Pork Ribs", price: 600, image: PorkRibs, description: "Tender ribs glazed in sticky BBQ sauce." },
  { name: "Pork Belly", price: 750, image: PorkBelly, description: "Soft and tender pork belly, perfect for grilling." },
  { name: "Pork Tenderloin", price: 1200, image: PorkTenderloin, description: "Savory tenderloin, a classic pork cut." },
  { name: "Pork Shoulder", price: 700, image: PorkShoulder, description: "Flavorful pork shoulder, a hearty option." },
  { name: "Pork Loin", price: 1000, image: PorkLoin, description: "Rich and flavorful pork loin, a hearty option." },
  { name: "Baby Back Ribs", price: 850, image: BabyBackRibs, description: "Soft and tender baby back ribs, perfect for grilling." },
  { name: "Pork Hocks", price: 450, image: PorkHock, description: "Tender pork hocks, a classic pork cut." },
  { name: "Pork Jowls", price: 500, image: PorkJowl, description: "Soft and tender pork jowls, perfect for grilling." },
  { name: "Pork Trotters", price: 350, image: PorkTrotters, description: "Flavorful pork trotters, a hearty option." },
  { name: "Sirloin Chop", price: 1500, image: Sirloin, description: "Juicy sirloin chop, a premium pork cut." },
  { name: "Pork Butt", price: 800, image: PorkButt, description: "Rich and flavorful pork butt, perfect for slow cooking." },
];

const processedPork = [
  { name: "Bacon (per 100g)", price: 300, image: Bacon, description: "Smoky bacon seasoned with a blend of spices." },
  { name: "Ham (per kg)", price: 1500, image: Ham, description: "Juicy, smoked ham seasoned to perfection." },
  { name: "Prosciutto (per 100g)", price: 750, image: Prosciutto, description: "Flavorful prosciutto, a classic Italian ham." },
  { name: "Salami (per 100g)", price: 350, image: Salami, description: "Juicy, salami seasoned to perfection." },
  { name: "Sausages (per kg)", price: 1100, image: Sausages, description: "Juicy, sausages seasoned to perfection." },
  { name: "Smoked Ham (per kg)", price: 1300, image: SmokedHam, description: "Juicy, smoked ham seasoned to perfection." },
  { name: "Hot Dogs / Frankfurters (per pack of 6)", price: 450, image: HotDog, description: "Juicy, hot dogs seasoned to perfection." },
  { name: "Bacon Bits (per 100g)", price: 250, image: BaconBits, description: "Juicy, bacon bits seasoned to perfection." },
  { name: "Sausage Bits (per 100g)", price: 300, image: SausageBits, description: "Juicy, sausage bits seasoned to perfection." },
  { name: "Pepperoni (per 100g)", price: 400, image: Pepperoni, description: "Juicy, pepperoni seasoned to perfection." },
  { name: "Pancetta (per 100g)", price: 500, image: Pancetta, description: "Italian cured pork belly, similar to bacon." },
  { name: "Serrano Ham (per 100g)", price: 800, image: SerranoHam, description: "Spanish dry-cured ham, rich and savory." },
];

const internationalPork = [
  { name: "Pulled Pork", price: 1200, image: PulledPork, description: "Slow-cooked, shredded pork." },
  { name: "Carnitas", price: 1000, image: Carnitas, description: "Mexican braised & fried pork." },
  { name: "Lechón (whole pig)", price: 22000, image: Lechon, description: "Whole roasted pig (popular in Spain/Philippines)." },
  { name: "Char Siu (per kg)", price: 1600, image: CharSiu, description: "Chinese BBQ pork, marinated & grilled." },
  { name: "Tonkatsu", price: 1300, image: Tonkatsu, description: "Japanese breaded pork cutlet." },
  { name: "Pork Dumplings (per piece)", price: 100, image: PorkDumplings, description: "Chinese dumplings filled with minced pork." },
  { name: "Pork Rinds (per bag)", price: 350, image: PorkRinds, description: "Pork rinds, fried pork skin." },
  { name: "Cassoulet", price: 1500, image: Cassoulet, description: "French stew with pork, beef, and vegetables." },
  { name: "Feijoada", price: 1200, image: Feijoada, description: "Brazilian stew with pork, beans, and vegetables." },
  { name: "Sisig", price: 900, image: Sisig, description: "Filipino stew with pork, vegetables, and spices." },
  { name: "Twice Cooked Pork", price: 1400, image: TwiceCookedPork, description: "Chinese dish with pork belly, vegetables, and spices." },
  { name: "Moo Ping", price: 800, image: MooPing, description: "Thai grilled pork skewers, marinated and flavorful." },
];

const SECTIONS = [
  { id: "fresh-cuts", icon: "🥩", navLabel: "Fresh Cuts", title: "Fresh Pork Cuts & Products (Per Kg):", items: freshporkcuts },
  { id: "processed", icon: "🥓", navLabel: "Processed", title: "Processed Pork Products:", items: processedPork },
  { id: "international", icon: "🌍", navLabel: "International", title: "International Pork Dishes (Per Serving):", items: internationalPork },
];

// Memoized so a toast update (or any parent re-render) doesn't re-render all 36 cards.
const MenuCard = memo(function MenuCard({ dish, index, onSelect, onFav, onCart }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(dish);
    }
  };

  return (
    <div
      className="menu-card"
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
      onClick={() => onSelect(dish)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${dish.name}`}
    >
      <div className="menu-card-image">
        <img src={dish.image} alt={dish.name} loading="lazy" decoding="async" />
      </div>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>

      <div className="menu-price">
        <p className="price">KES {dish.price}</p>
        <div className="menu-buttons">
          <div className="tooltip">
            <button
              className="favs-btn"
              aria-label={`Add ${dish.name} to favorites`}
              onClick={(e) => {
                e.stopPropagation();
                onFav(dish);
              }}
            >
              ❤️
            </button>
            <span className="tooltiptext">Add to Favorites</span>
          </div>

          <div className="tooltip">
            <button
              className="cartt-btn"
              aria-label={`Add ${dish.name} to cart`}
              onClick={(e) => {
                e.stopPropagation();
                onCart(dish);
              }}
            >
              🛒
            </button>
            <span className="tooltiptext">Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const Menu = () => {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000);
  }, []);

  const handleSelect = useCallback(
    (dish) => {
      navigate("/dish/" + dish.name.toLowerCase().replace(/\s/g, "-"), {
        state: { dish },
      });
    },
    [navigate]
  );

  const handleFav = useCallback(
    (dish) => {
      addToFavorites(dish);
      showToast(`${dish.name} Added to Favorites ❤️`);
    },
    [showToast]
  );

  const handleCart = useCallback(
    (dish) => {
      addToCart(dish);
      showToast(`${dish.name} Added to Cart 🛒`);
    },
    [showToast]
  );

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

      <header className="menu-hero">
        <h1>Our Porky Menu</h1>
        <p className="menu-subtitle">
          Fresh cuts, house-cured classics, and pork dishes from around the world.
        </p>
      </header>

      <nav className="menu-quicknav" aria-label="Jump to menu section">
        {SECTIONS.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.icon} {section.navLabel}
          </a>
        ))}
      </nav>

      {SECTIONS.map((section) => (
        <section
          id={section.id}
          className="menu-section"
          key={section.id}
          aria-labelledby={`${section.id}-heading`}
        >
          <h4 id={`${section.id}-heading`}>{section.title}</h4>
          <div className="menu-grid">
            {section.items.map((dish, index) => (
              <MenuCard
                key={dish.name}
                dish={dish}
                index={index}
                onSelect={handleSelect}
                onFav={handleFav}
                onCart={handleCart}
              />
            ))}
          </div>
        </section>
      ))}

      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
};

export default Menu;
