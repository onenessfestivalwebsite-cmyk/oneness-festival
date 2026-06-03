import React from 'react';
import './Accommodations.css';
import AccommodationRegistration from '../Accommodation/AccommodationRegistration';

// Assets
import bgImage from '../../assets/accommodationpage/image 48.png';
import topMask from '../../assets/accommodationpage/Mask group.png';
import bottomMask from '../../assets/accommodationpage/Mask group (1).png';
import dividerImg from '../../assets/Group 5.png';

const FlowerIcon = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={`accomm-btn-flower-icon ${className || ''}`}>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 1.5C12.5 1.5 13 3 13 5.5C13 8 12.5 9 12 9C11.5 9 11 8 11 5.5C11 3 11.5 1.5 12 1.5Z" />
    <path d="M12 22.5C11.5 22.5 11 21 11 18.5C11 16 11.5 15 12 15C12.5 15 13 16 13 18.5C13 21 12.5 22.5 12 22.5Z" />
    <path d="M1.5 12C1.5 11.5 3 11 5.5 11C8 11 9 11.5 9 12C9 12.5 8 13 5.5 13C3 13 1.5 12.5 1.5 12Z" />
    <path d="M22.5 12C22.5 12.5 21 13 18.5 13C16 13 15 12.5 15 12C15 11.5 16 11 18.5 11C21 11 22.5 11.5 22.5 12Z" />
    <path d="M4.58 4.58C4.93 4.22 6.1 5.05 7.87 6.81C9.64 8.58 9.94 9.24 9.59 9.59C9.24 9.94 8.58 9.64 6.81 7.87C5.05 6.1 4.22 4.93 4.58 4.58Z" />
    <path d="M19.42 19.42C19.07 19.78 17.9 18.95 16.13 17.19C14.36 15.42 14.06 14.76 14.41 14.41C14.76 14.06 15.42 14.36 17.19 16.13C18.95 17.9 19.78 19.07 19.42 19.42Z" />
    <path d="M4.58 19.42C4.22 19.07 5.05 17.9 6.81 16.13C8.58 14.36 9.24 14.06 9.59 14.41C9.94 14.76 9.64 15.42 7.87 17.19C6.1 18.95 4.93 19.78 4.58 19.42Z" />
    <path d="M19.42 4.58C19.78 4.93 18.95 6.1 17.19 7.87C15.42 9.64 14.76 9.94 14.41 9.59C14.06 9.24 14.36 8.58 16.13 6.81C17.9 5.05 19.07 4.22 19.42 4.58Z" />
  </svg>
);

const Accommodations = () => {
  const handleScrollToForm = () => {
    const bookingSection = document.getElementById('accommodation-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="accomm-page-wrapper">
      {/* Hero Section */}
      <section className="accomm-hero-section" style={{ backgroundImage: `url("${bgImage}")` }}>
        <div className="accomm-hero-overlay" />
        
        {/* Top Mask */}
        <img src={topMask} alt="" className="accomm-mask-top" />

        <div className="accomm-hero-content">
          <p className="accomm-hero-subtitle">The Oneness Festival Packages</p>
          <p className="accomm-hero-year">2026</p>
          <h1 className="accomm-hero-title">GET YOUR ACCOMMODATION</h1>

          <div className="accomm-btn-wrapper">
            <button className="accomm-reserve-btn" onClick={handleScrollToForm}>
              <div className="accomm-btn-inner">
                <FlowerIcon className="flower-left-bottom" />
                <span className="accomm-btn-text">RESERVE YOUR ACCOMMODATION</span>
                <FlowerIcon className="flower-right-top" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Mask */}
        <img src={bottomMask} alt="" className="accomm-mask-bottom" />
      </section>

      {/* Intro Description Section */}
      <section className="accomm-intro-section">
        <div className="accomm-intro-container">
          <p className="accomm-intro-year">2026</p>
          <h2 className="accomm-intro-title">ACCOMMODATION</h2>
          
          <img src={dividerImg} alt="Teal Divider" className="accomm-intro-divider" />
          
          <p className="accomm-intro-text">
            Jaipur is a city of heritage, culture, and hospitality.
            <br />
            We have gathered options for accommodation near the festival venue to make your stay comfortable, peaceful, and convenient.
            <br />
            Here you will find something that suits your needs.
          </p>
        </div>
        
        {/* Bottom Mask to blend into the next section */}
        <img src={bottomMask} alt="" className="accomm-intro-mask-bottom" />
      </section>

      {/* Registration / Booking Section */}
      {/* <AccommodationRegistration /> */}
    </div>
  );
};

export default Accommodations;
