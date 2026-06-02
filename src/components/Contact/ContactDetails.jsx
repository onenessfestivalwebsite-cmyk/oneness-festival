import React from 'react';
import './ContactDetails.css';
import dividerImg from '../../assets/Group 5.png';

const ContactDetails = () => {
  return (
    <section className="contact-details-section">
      <div className="contact-details-container">
        <div className="contact-details-header">
          <h2 className="contact-details-title">CONTACT US</h2>
          <img src={dividerImg} alt="" className="contact-details-divider" />
          <p className="contact-details-intro">
            If you would like information about the festival, tickets, participation, partnerships,
            or media, please contact us.
          </p>
          <p className="contact-details-support">We're happy to support you.</p>
        </div>

        <div className="contact-details-grid">
          {/* Email Box */}
          <div className="contact-detail-box email-box">
            <div className="detail-icon-title">
              <span className="detail-icon">📧</span>
              <h3 className="detail-label">Email</h3>
            </div>
            <p className="detail-value">contact@onenessfestival.in</p>
            <p className="detail-subtext">We usually reply within 24-48 hours.</p>
          </div>

          {/* Phone Box */}
          <div className="contact-detail-box phone-box">
            <div className="detail-icon-title">
              <span className="detail-icon">☎️</span>
              <h3 className="detail-label">Phone / WhatsApp</h3>
            </div>
            <p className="detail-value">+91 XXXX XXX XXX</p>
            <p className="detail-subtext">Hours: 10:00 - 18:00 IST (Monday-Friday)</p>
          </div>

          {/* Location Box */}
          <div className="contact-detail-box location-box">
            <div className="detail-icon-title">
              <span className="detail-icon">📍</span>
              <h3 className="detail-label">Location</h3>
            </div>
            <p className="detail-value">Jaipur, Rajasthan, India</p>
            <p className="detail-subtext">Office or location details here?</p>
          </div>

          {/* Social Media Box */}
          <div className="contact-detail-box social-box">
            <div className="detail-icon-title">
              <span className="detail-icon">🔗</span>
              <h3 className="detail-label">Social Media</h3>
            </div>
            <div className="social-links-row">
              <span className="social-item">Instagram</span>
              <span className="social-item">Facebook</span>
              <span className="social-item">YouTube</span>
            </div>
            <p className="detail-subtext">@onenessfestivalindia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
