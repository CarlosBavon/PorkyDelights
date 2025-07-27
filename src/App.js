import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import DishDetail from "./pages/DishDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from "./pages/FavoritesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PromoPopup from "./components/PromoPopup";

function App() {
  return (
    <div>
      <Navbar />
      <PromoPopup/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dish/:slug" element={<DishDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
