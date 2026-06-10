import React, { useState } from 'react';
import './Ticketsection1.css';
import lotusLogo from '../../assets/LOGOORG.png';
import krishnaVector from '../../assets/Vector (6).png';
import vector1 from '../../assets/Vector.png';
import vector2 from '../../assets/Vector (1).png';
import sunsetImg from '../../assets/Mask group(1).png';
import dividerImg from '../../assets/Group 5.png';

const TicketCard = ({ days }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-content">
        <p className="ticket-days">{days} Day pass</p>
        <h3 className="ticket-title">PROGRAM TITLE</h3>
        <p className="ticket-price">RS. 00,000 (exe. fees)</p>
        <button className="select-btn">SELECT</button>
      </div>
    </div>
  );
};

const TicketsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data for tickets
  const ticketsData = [
    { id: 1, days: 3, title: "PROGRAM TITLE" },
    { id: 2, days: 3, title: "PROGRAM TITLE" },
    { id: 3, days: 3, title: "PROGRAM TITLE" },
    { id: 4, days: 2, title: "PROGRAM TITLE" },
    { id: 5, days: 4, title: "PROGRAM TITLE" },
    { id: 6, days: 1, title: "PROGRAM TITLE" },
    // Page 2
    { id: 7, days: 2, title: "PROGRAM TITLE 2" },
    { id: 8, days: 5, title: "PROGRAM TITLE 2" },
    { id: 9, days: 1, title: "PROGRAM TITLE 2" },
    { id: 10, days: 3, title: "PROGRAM TITLE 2" },
    { id: 11, days: 2, title: "PROGRAM TITLE 2" },
    { id: 12, days: 4, title: "PROGRAM TITLE 2" },
    // Page 3
    { id: 13, days: 3, title: "PROGRAM TITLE 3" },
    { id: 14, days: 1, title: "PROGRAM TITLE 3" },
    { id: 15, days: 2, title: "PROGRAM TITLE 3" },
  ];

  const totalPages = Math.ceil(ticketsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = ticketsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="tickets-section" id="tickets">
      <div className="tickets-container">
        {/* Header Info */}
        <div className="festival-info-header">
          <div className="custom-logo-container">
            <img src={lotusLogo} alt="Lotus Logo" className="lotus-logo-img" />
            <div className="logo-text-wrapper">
              <div className="jaipur-text">
                JA<img src={krishnaVector} alt="I" className="krishna-i" />PUR
              </div>
              <div className="oneness-text">ONENESS</div>
              <div className="festival-text">FESTIVAL</div>
            </div>
          </div>
          <div className="info-bar">
            <div className="info-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#c93044">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <span>Month 00-00, 2026</span>
            </div>
            <div className="info-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#c93044">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Jaipur, India</span>
            </div>
            <div className="info-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#c93044">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <span>All Ages</span>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="tickets-content-split">

          {/* Left Side: Tickets */}
          <div className="tickets-left">
            <div className="tickets-grid">
              {currentTickets.map((ticket) => (
                <TicketCard key={ticket.id} days={ticket.days} />
              ))}
            </div>

            <div className="pagination">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="page-btn next-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ▶
              </button>
            </div>

            <div className="main-cta-container">
              <button className="main-cta-btn">GET YOUR 1 TICKET NOW</button>
            </div>
          </div>

          {/* Right Side: Coming Soon Card */}
          <div className="tickets-right">
            <div className="coming-soon-card">
              {/* Vector Frames */}
              <img src={vector2} alt="" className="card-frame-outer" />
              <img src={vector1} alt="" className="card-frame-inner" />

              <div className="card-inner">
                <h2 className="coming-soon-title">TICKETS<br />COMING<br />SOON!</h2>

                <div className="card-divider">
                  <img src={dividerImg} alt="Divider" />
                </div>

                <p>The Jaipur Oneness Festival invites you to join a celebration of culture, music, and shared experiences.</p>

                <p className="highlight-red">Ticket details and types will be announced soon.</p>

                <p>Sign up to receive updates and be among the first to secure your spot at this unique festival.</p>

                <p><span className="highlight-green">Sign up below</span> to receive early access and updates.</p>

                {/* Sunset Image */}
                <div className="sunset-placeholder">
                  <img src={sunsetImg} alt="Sunset" className="sunset-image" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TicketsSection;