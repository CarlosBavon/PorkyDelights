import React, { useEffect, useState } from 'react';
import '../styles/PromoPopup.css';
import Samosa from '../assets/samosa bowl.png'
import { Link } from 'react-router-dom';
import Logo from '../assets/popuplogo.png'

const PromoPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setShowPopup(false);

    if (!showPopup) return null;

    return (
        <div className="popup-backdrop">
            <div className="popup-container">
                <button className="popup-close" onClick={closePopup}>✖</button>
                <nav className='popup-nav'>
                    <div className='popup-logo'>
                        <img src={Logo} alt='Logo'/>
                        PORKY<br />DELIGHTS
                    </div>
                    <div className='popup-social-links'>
                        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://twitter.com" target='_blank' rel="noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.wa.me.com" target='_blank' rel="noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </nav>
                <section className='popup-hero'>
                    <div className='popup-header'>
                        <h1 className='special'>Special</h1>
                        <h1 className='samosa'>SAMOSA</h1>
                        <h1 className='weekend'>This Weekend Only</h1>
                    </div>
                    <div className='popup-image'>
                        <p><span className='seventy'>70%</span><br /><span className='off'>OFF</span></p>
                        <img src={Samosa} alt='Samosa'/>
                    </div>
                </section>
                <section className='popup-footer'>
                    <div className='popup-order-button'>
                        <Link to="/menu" className='popup-button'>
                            ORDER NOW
                        </Link>
                        <p>www.porkydelights.com</p>
                    </div>
                    <div className='popup-contact'>
                        <div className='popup-contact-content'>
                            <p>Free Home Delivery</p>
                            <h1>0799-657-824</h1>
                        </div>
                        <div className='popup-contact-icon'>
                            <i class="fa-solid fa-tty"></i>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PromoPopup;