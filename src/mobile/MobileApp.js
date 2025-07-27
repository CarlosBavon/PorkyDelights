import "../styles/MobileApp.css";
import BottomNavBar from "./BottomNavBar";
import HomeTab from "./HomeTab";
import CartTab from "./CartTab";
import Menu from "./MenuTab";
import ContactTab from "./ContactTab";
import { Route, Routes } from "react-router-dom";

function MobileApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartTab />} />
        <Route path="/contact" element={<ContactTab />} />
      </Routes>
      <BottomNavBar />
    </div>
  );
};

export default MobileApp;
