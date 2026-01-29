import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReferralBanner = () => {
    const bannerRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(bannerRef.current, {
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                },
                x: 100, // From right
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // Stagger content slightly for a nicer effect
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top 70%",
                    toggleActions: "play reverse play reverse"
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.3,
                ease: "power2.out"
            });
        }, bannerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="referral-banner" ref={bannerRef}>
            <div className="container">
                <div className="referral-content" ref={contentRef}>
                    <h3 className="referral-title text-orange">Premier Pack</h3>
                    <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Premium coverage, lowest rates. We offer the most affordable and reliable car insurance in the GTA.
                        Experience <span className="text-orange">guaranteed lowest prices</span>,
                        <span className="text-orange"> trusted coverage</span>, fast quotes, and personalized service tailored just for you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReferralBanner;
