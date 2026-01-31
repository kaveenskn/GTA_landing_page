import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const textRef = useRef(null);
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!textRef.current) return;

            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 92%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 20,
                duration: 2.5,
                ease: 'power3.out'
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className="footer" ref={footerRef}>
            <div className="footer-content" ref={textRef} style={{ fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.76)' }}>
                © 2026{' '}
                <a className="footer-link" href="#" target="_self" rel="noreferrer">
                    INSIDERSRATE
                </a>{' '}
                ™. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
