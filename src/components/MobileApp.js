import "../styles/MobileApp.css";
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import HomeTab from "../mobile/HomeTab";
import CartTab from "../mobile/CartTab";
import AboutTab from "../mobile/AboutTab";
import ContactTab from "../mobile/ContactTab";
import LoginPage from "../mobile/LoginPage";
import SignupPage from "../mobile/SignupPage";
import { Route, Router, Routes } from "react-router-dom";

function MobileApp () {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomeTab />} />
      </Routes>
      <BottomNavBar />
    </Router>
  );
};

export default MobileApp;
