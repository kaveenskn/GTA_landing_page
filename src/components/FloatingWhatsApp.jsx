import React from 'react';

const FloatingWhatsApp = () => {
    return (
        <a href="https://wa.me/14379802528" className="floating-whatsapp" aria-label="Chat on WhatsApp">
            <div className="floating-text">Instant quote: +1 (437) 980-2528</div>
            <div className="floating-icon">
                <img src="/assets/whatsapp.svg" alt="" />
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
