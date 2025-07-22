import "../styles/MobileApp.css";
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import HomeTab from "./HomeTab";
import CartTab from "./CartTab";
import Menu from "./MenuTab";
import { Route, Routes } from "react-router-dom";

function MobileApp () {
  return (
    <div>
      <TopNavBar />
        <Routes>
          <Route path="/" element={<HomeTab/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/cart" element={<CartTab/>}/>
        </Routes>
      <BottomNavBar />
    </div>
  );
};

export default MobileApp;
