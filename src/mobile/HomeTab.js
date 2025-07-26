import React, { useRef, useState } from "react";
import "../mobileStyles/HomeTab.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PorkChop from '../images/pork-chops.jpeg'
import PorkRibs from '../images/pork-ribs.jpeg'
import Sausage from '../images/sausages.jpeg'


const HomeTab = () => {

  const menuRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const angleRef = useRef(0);

  const getAngle = (x, y) => {
    const rect = menuRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.atan2(y - cy, x - cx) * (180 / Math.PI);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    angleRef.current = getAngle(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const newAngle = getAngle(touch.clientX, touch.clientY);
    const delta = newAngle - angleRef.current;
    setRotation((prev) => prev + delta);
    angleRef.current = newAngle;
  };


  return (
    <div className="home-tab">
      {/* Hero Section */}
      <section className="hero-tab">
        <div className="overlay-tab">
          <div className="overlay-icons"
            ref={menuRef}
            style={{ transform: `rotate(${rotation}deg)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            <div className="icon" style={{ transform: `rotate(${-rotation}deg)` }}><i class="fa-solid fa-bowl-food"></i><p>Pork</p></div>
            <div className="icon" style={{ transform: `rotate(${-rotation}deg)` }}><i class="fa-solid fa-bacon"></i><p>Bacon</p></div>
            <div className="icon" style={{ transform: `rotate(${-rotation}deg)` }}><i class="fa-solid fa-burger"></i><p>Desserts</p></div>
            <div className="icon" style={{ transform: `rotate(${-rotation}deg)` }}><i class="fa-solid fa-utensils"></i><p>Menu</p></div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <motion.section
        className="welcome"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Welcome to the World of Pork</h2>
        <p>
          We serve mouthwatering pork chops, ribs, sausages and more – prepared with love, spice, and tradition.
        </p>
      </motion.section>

      {/* Featured Items */}
      <motion.section
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Our Specials</h3>
        <div className="cards">
          {[
            { img: PorkChop, title: 'Grilled Pork Chop', desc: 'Smoky, juicy and full of flavor!' },
            { img: PorkRibs, title: 'BBQ Pork Ribs', desc: 'Slow-cooked and dripping in sauce.' },
            { img: Sausage, title: 'Spicy Pork Sausage', desc: 'Perfectly seasoned & grilled.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Craving Something Delicious?</h2>
        <p>Don't miss out on our exclusive deals and special offers.</p>
        <Link to="/menu">
          <button className="cta-btn">Order Now</button>
        </Link>
      </section>
    </div>
  );
};

export default HomeTab;
