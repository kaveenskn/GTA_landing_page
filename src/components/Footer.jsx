import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-marquee" aria-label="Footer notice">
                <marquee behavior="scroll" direction="left" scrollamount="6">
                    © 2025{' '}
                    <a className="footer-link" href="#" target="_self" rel="noreferrer">
                        LA-projects
                    </a>{' '}
                    ™. All rights reserved.
                </marquee>
            </div>
        </footer>
    );
};

export default Footer;
