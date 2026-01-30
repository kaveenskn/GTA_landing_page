import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import images
import officeImg from '../assets/about/office.png';
import meetingImg from '../assets/about/meeting.png';
import dashboardImg from '../assets/about/dashboard.png';
import teamImg from '../assets/about/team.png';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [displayedTab, setDisplayedTab] = useState('about');
    const sectionRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);
    const tabContentRef = useRef(null);
    const isSwitchingRef = useRef(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play reverse play reverse"
                }
            });

            tl.from(leftColRef.current, {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
                .from(rightColRef.current, {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.6");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const content = {
        about: {
            title: "Redefining Financial Excellence",
            text: "We are more than just a financial institution; we are your partners in growth. Leveraging cutting-edge technology and deep industry expertise, we empower businesses and individuals to navigate the complexities of the modern financial landscape with confidence. Our commitment to transparency, security, and innovation is the bedrock of our success."
        },
        founders: {
            title: "Visionaries at the Helm",
            text: "Our journey began with a shared vision: to democratize access to premium financial tools. Our founders, veterans of Wall Street and Silicon Valley, combined their expertise to build a platform that bridges the gap between traditional banking and the digital future. Their leadership continues to inspire our relentless pursuit of excellence."
        },
        team: {
            title: "A Global Team of Experts",
            text: "Our strength lies in our people. We are a diverse team of data scientists, financial analysts, and customer success champions hailing from over 20 countries. United by a passion for solving complex problems, we work tirelessly to deliver intuitive, high-impact solutions that drive real results for our clients."
        }
    };

    const tabs = [
        { id: 'about', label: 'About Us' },
        { id: 'founders', label: 'Our Founders' },
        { id: 'team', label: 'Team' }
    ];

    const handleTabClick = (nextTab) => {
        if (nextTab === activeTab) return;
        if (isSwitchingRef.current) return;

        setActiveTab(nextTab);

        // Smoothly fade/slide content out, swap, then fade/slide in.
        const el = tabContentRef.current;
        if (!el) {
            setDisplayedTab(nextTab);
            return;
        }

        isSwitchingRef.current = true;

        const prefersReducedMotion =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            setDisplayedTab(nextTab);
            isSwitchingRef.current = false;
            return;
        }

        gsap.to(el, {
            opacity: 0,
            y: 10,
            duration: 0.22,
            ease: 'power2.out',
            overwrite: 'auto',
            onComplete: () => {
                setDisplayedTab(nextTab);
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 10 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        overwrite: 'auto',
                        onComplete: () => {
                            isSwitchingRef.current = false;
                        }
                    }
                );
            }
        });
    };

    return (
        <section className="about-section" ref={sectionRef}>
            <div className="container">
                <div className="about-grid">
                    {/* Left Column: Text Content */}
                    <div className="about-content" ref={leftColRef}>
                        <h2 className="section-title">Who We Are</h2>

                        <div className="tab-nav">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content" ref={tabContentRef} style={{ willChange: 'transform, opacity' }}>
                            <h3 className="content-title">{content[displayedTab].title}</h3>
                            <p className="content-text">{content[displayedTab].text}</p>

                            <a href="#contact" className="learn-more-link">
                                Learn More <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image Slider */}
                    <div className="about-slider-wrapper" ref={rightColRef}>
                        <Swiper
                            modules={[Pagination, Autoplay, EffectFade]}
                            effect="fade"
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop={true}
                            className="about-swiper"
                        >
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={officeImg} alt="Modern Office" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={meetingImg} alt="Team Meeting" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={dashboardImg} alt="Financial Dashboard" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={teamImg} alt="Leadership Team" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
