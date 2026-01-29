import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <div className="container features-grid">
                <div className="feature-card">
                    <div className="feature-icon">💰</div>
                    <h4>Lowest Prices</h4>
                    <p>Guaranteed best rates in the city.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h4>Fast Quotes</h4>
                    <p>Get a quote instantly via chat.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🛡️</div>
                    <h4>Trusted Partners</h4>
                    <p>Reliable coverage you can count on.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📋</div>
                    <h4>Personalized</h4>
                    <p>Coverage tailored to your needs.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
