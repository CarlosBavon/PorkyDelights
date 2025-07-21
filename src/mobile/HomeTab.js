import React from "react";
import "../mobileStyles/HomeTab.css";

const porkItems = [
  { name: "Pork Ribs", img: "/images/ribs.jpg" },
  { name: "Pork Sausage", img: "/images/sausage.jpg" },
  { name: "Pork Chop", img: "/images/chop.jpg" },
];

const HomeTab = () => {
  return (
    <div className="home-tab">
      <h2>🔥 Porky Specials</h2>
      <div className="card-container">
        {porkItems.map((item, index) => (
          <div key={index} className="pork-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTab;
