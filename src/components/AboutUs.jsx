import React, { useState, useRef, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import images
import sliderImg1 from '../assets/about/slider_img_1.png';
import sliderImg2 from '../assets/about/slider_img_2.png';
import sliderImg3 from '../assets/about/car_insurance_2.png';
import sliderImg4 from '../assets/about/slider_img_4.png';
import sliderImg5 from '../assets/about/car_insurance_3.png';
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
                duration: 0.8,
                ease: "power3.out"
            })
                .from(rightColRef.current, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const content = {
        about: {
            title: "About Us",
            text:
                "At InsidersRate, we help drivers across the GTA find the cheapest auto insurance without the stress. We compare rates from trusted insurers, uncover insider discounts, and match you with coverage that actually fits your needs. No upselling. No confusing jargon. Just honest savings, fast quotes, and clear advice. Our mission is simple: pay less for car insurance and feel confident about your coverage."
        },
        team: {
            title: "Insurance Insiders, Not Salespeople",
            text:
                "Our team is made up of licensed insurance professionals, rate analysts, and customer-first advisors who know the GTA market inside out. We stay ahead of changing rates, policies, and discounts so you do not have to. Every recommendation is based on data, experience, and what saves you the most money. Real people. Real savings. Real support."
        }
    };

    const tabs = [
        { id: 'about', label: 'About Us' },
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
                        duration: 0.32,
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
                                    <img src={sliderImg1} alt="Professional Car Insurance" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={sliderImg2} alt="Corporate Office & Vehicle" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={sliderImg3} alt="Detailed Car Quality" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={sliderImg4} alt="Family Travel Security" className="slide-image" />
                                    <div className="slide-overlay"></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-image-container">
                                    <img src={sliderImg5} alt="Road Safety & Protection" className="slide-image" />
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
