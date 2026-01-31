import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const ctaRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states established by from() calls

            // Content slides in from left
            gsap.from(contentRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.2
            });

            // Image slides in from right
            gsap.from(imageRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.2,
                onComplete: () => {
                    gsap.set(imageRef.current, { clearProps: "transform" });
                }
            });

            // Pulse animation for WhatsApp button
            gsap.to(ctaRef.current, {
                scale: 1.05,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                repeatDelay: 3,
                ease: "sine.inOut"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={heroRef} style={{ background: 'none' }}>
            {/* Recreating the dark overlay and positioning the car image specifically for animation */}
            <div
                className="hero-bg-layer"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(18, 18, 18, 0.95) 30%, rgba(18, 18, 18, 0.4) 100%)',
                    backgroundAttachment: 'fixed',
                    zIndex: 1
                }}
            />
            <div
                ref={imageRef}
                className="hero-image-layer"
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: "url('/assets/car.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    zIndex: 0
                }}
            />

            <div className="container hero-layout" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-content" ref={contentRef}>
                    <h1>CAR INSURANCE</h1>
                    <h2 className="text-orange">GUARANTEED LOWEST PRICES IN THE GTA</h2>
                    <p className="hero-subtext">New or looking for a better quote?</p>

                    <div className="cta-wrapper">
                        <a href="https://wa.me/16472195969" className="btn btn-whatsapp" ref={ctaRef}>
                            <span className="icon-wrapper">
                                <img src="/assets/whatsapp.svg" alt="" className="whatsapp-icon" />
                            </span>
                            Chat on WhatsApp – Get a Quote
                        </a>
                        <div className="cta-details">
                            <p>Contact via WhatsApp</p>
                            <p className="phone-number">+1 (647) 219-5969</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
