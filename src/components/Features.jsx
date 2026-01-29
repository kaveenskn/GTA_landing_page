import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Section slide in
            gsap.from(sectionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Cards stagger in
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            borderColor: "#FF6B00",
            duration: 0.3,
            ease: "power1.out"
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            boxShadow: "none",
            borderColor: "rgba(255, 255, 255, 0.05)",
            duration: 0.3,
            ease: "power1.out"
        });
    };

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section className="features" ref={sectionRef}>
            <div className="container features-grid">
                <div className="feature-card" ref={addToRefs} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="feature-icon">💰</div>
                    <h4>Lowest Prices</h4>
                    <p>Guaranteed best rates in the city.</p>
                </div>
                <div className="feature-card" ref={addToRefs} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="feature-icon">⚡</div>
                    <h4>Fast Quotes</h4>
                    <p>Get a quote instantly via chat.</p>
                </div>
                <div className="feature-card" ref={addToRefs} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="feature-icon">🛡️</div>
                    <h4>Trusted Partners</h4>
                    <p>Reliable coverage you can count on.</p>
                </div>
                <div className="feature-card" ref={addToRefs} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="feature-icon">📋</div>
                    <h4>Personalized</h4>
                    <p>Coverage tailored to your needs.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
