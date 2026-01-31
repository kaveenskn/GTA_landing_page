import React from 'react';

const FloatingWhatsApp = () => {
    return (
        <a href="https://wa.me/16472195969" className="floating-whatsapp" aria-label="Chat on WhatsApp">
            <div className="floating-text">Instant quote: +1 (647) 219-5969</div>
            <div className="floating-icon">
                <img src="/assets/whatsapp.svg" alt="" />
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
