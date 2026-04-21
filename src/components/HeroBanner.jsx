import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Discover the Next Level of Tech</h1>
        <p className="hero-subtitle">Experience our premium collection with exclusive rewards.</p>
        <button className="hero-cta">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8 5v14l11-7z"/></svg>
          Explore Now
        </button>
      </div>
      <div className="hero-fade"></div>
    </div>
  );
};

export default HeroBanner;
