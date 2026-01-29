import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <div className="logo">INSURE<span className="text-orange">GTA</span></div>
                <a href="https://wa.me/16472195969" className="btn btn-outline mobile-hide">Get a Quote</a>
            </nav>
        </header>
    );
};

export default Header;
