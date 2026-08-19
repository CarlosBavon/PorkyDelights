import React, { useEffect, useState, useCallback } from 'react';
import '../styles/PromoPopup.css';
import Samosa from '../assets/samosa bowl.png';
import { Link } from 'react-router-dom';
import Logo from '../assets/popuplogo.png';

const STORAGE_KEY = 'promoPopupDismissedUntil';
const SHOW_DELAY_MS = 1000;
const SNOOZE_HOURS = 24; // how long to stay hidden after a visitor closes it

// "This weekend" = end of the coming Sunday (or today, if it's already Sunday)
function getWeekendEnd() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const daysUntilSunday = day === 0 ? 0 : 7 - day;
    const end = new Date(now);
    end.setDate(now.getDate() + daysUntilSunday);
    end.setHours(23, 59, 59, 999);
    return end;
}

const PromoPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [offerEnd] = useState(getWeekendEnd);
    const [timeLeft, setTimeLeft] = useState(() => Math.max(offerEnd - Date.now(), 0));

    // Respect an earlier dismissal
    useEffect(() => {
        const dismissedUntil = Number(localStorage.getItem(STORAGE_KEY) || 0);
        if (dismissedUntil > Date.now()) return;

        const timer = setTimeout(() => setShowPopup(true), SHOW_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    // Live countdown
    useEffect(() => {
        if (!showPopup) return;
        const interval = setInterval(() => {
            setTimeLeft(Math.max(offerEnd - Date.now(), 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [showPopup, offerEnd]);

    // Lock background scroll while open
    useEffect(() => {
        if (!showPopup) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = original; };
    }, [showPopup]);

    const closePopup = useCallback((remember = true) => {
        setIsClosing(true);
        setTimeout(() => {
            setShowPopup(false);
            setIsClosing(false);
            if (remember) {
                localStorage.setItem(
                    STORAGE_KEY,
                    String(Date.now() + SNOOZE_HOURS * 60 * 60 * 1000)
                );
            }
        }, 250); // matches CSS exit animation duration
    }, []);

    // Escape key closes it
    useEffect(() => {
        if (!showPopup) return;
        const onKeyDown = (e) => { if (e.key === 'Escape') closePopup(); };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [showPopup, closePopup]);

    if (!showPopup) return null;

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    return (
        <div
            className={`popup-backdrop ${isClosing ? 'closing' : ''}`}
            onClick={() => closePopup()}
            role="presentation"
        >
            <div
                className="popup-container"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="promo-popup-title"
            >
                <button
                    className="popup-close"
                    onClick={() => closePopup()}
                    aria-label="Close promotion popup"
                >
                    ✖
                </button>
                <nav className='popup-nav'>
                    <div className='popup-logo'>
                        <img src={Logo} alt='Porky Delights logo' />
                        PORKY<br />DELIGHTS
                    </div>
                    <div className='popup-social-links'>
                        <a href="https://www.facebook.com" target='_blank' rel="noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target='_blank' rel="noreferrer" aria-label="X (Twitter)">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="https://wa.me/254799657824" target='_blank' rel="noreferrer" aria-label="WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </nav>
                <section className='popup-hero'>
                    <div className='popup-header'>
                        <h1 id="promo-popup-title" className='special'>Special</h1>
                        <h1 className='samosa'>SAMOSA</h1>
                        <h1 className='weekend'>This Weekend Only</h1>
                    </div>
                    <div className='popup-image'>
                        <p><span className='seventy'>70%</span><br /><span className='off'>OFF</span></p>
                        <img src={Samosa} alt='Bowl of samosas' />
                    </div>
                </section>

                {timeLeft > 0 && (
                    <div className="popup-countdown" aria-live="polite">
                        Offer ends in <strong>{formatTime(timeLeft)}</strong>
                    </div>
                )}

                <section className='popup-footer'>
                    <div className='popup-order-button'>
                        <Link to="/menu" className='popup-button' onClick={() => closePopup(false)}>
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
                            <i className="fa-solid fa-tty" aria-hidden="true"></i>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PromoPopup;