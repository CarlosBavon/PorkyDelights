import React from "react";
import "../mobileStyles/HomeTab.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const porkItems = [
  { name: "Pork Ribs", img: "/images/ribs.jpg" },
  { name: "Pork Sausage", img: "/images/sausage.jpg" },
  { name: "Pork Chop", img: "/images/chop.jpg" },
];

const HomeTab = () => {
  return (
    <div className="home-tab">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Porky Delights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience the Juiciest Cuts of Perfection
          </motion.p>
          <Link to="/menu">
            <button className="cta-btn">Explore Menu</button>
          </Link> 
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
            { img: '/images/pork-chop.jpg', title: 'Grilled Pork Chop', desc: 'Smoky, juicy and full of flavor!' },
            { img: '/images/pork-ribs.jpg', title: 'BBQ Pork Ribs', desc: 'Slow-cooked and dripping in sauce.' },
            { img: '/images/sausage.jpg', title: 'Spicy Pork Sausage', desc: 'Perfectly seasoned & grilled.' },
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
