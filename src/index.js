import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './mobile/CartContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <CartProvider>
        <AppRouter />
    </CartProvider>
    </BrowserRouter>
);


