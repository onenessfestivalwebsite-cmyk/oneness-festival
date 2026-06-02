import React from 'react';
import bgImage from '../../assets/exp explore page/image 36.png';
import mapImage from '../../assets/exp explore page/image 9.png';
import maskTop from '../../assets/exp explore page/Mask group (6).png';
import maskBottom from '../../assets/exp explore page/Mask group (7).png';
import dividerImg from '../../assets/exp page img/dvider_20 5.png';
import image34 from '../../assets/exp page img/image 34 (1).png';

import './ExplorePage.css';

export default function ExplorePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Roboto, sans-serif' }}>
      {/* ── HERO SECTION ── */}
      <section className="explore-hero">
        <img src={bgImage} alt="Festival" className="explore-hero-bg" />
        <div className="explore-hero-overlay" />
        <img src={maskTop} alt="" className="explore-mask-bottom" />
        <img src={maskBottom} alt="" className="explore-mask-top" />
        
        <div className="explore-hero-content">
          <h2 className="explore-subtitle">The Oneness Festival 2026</h2>
          <h1 className="explore-title">FESTIVAL SCHEDULE</h1>
          
          <button className="explore-btn-white">
            <span className="deco-icon icon-tl">✾</span>
            DOWNLOAD NOW
            <span className="deco-icon icon-br">✾</span>
          </button>
        </div>
      </section>

      {/* ── SCHEDULE SECTION ── */}
      <section className="schedule-section">
        <div className="schedule-content">

          <div className="pdf-viewer-container">
            {/* Header/Toolbar */}
            <div className="bg-[#3D2B1F] h-auto md:h-[48px] flex items-center justify-between px-4 md:px-6 py-2 md:py-0 text-[#F8B12F] select-none rounded-t-[10px] pdf-viewer-header flex-wrap md:flex-nowrap gap-2 md:gap-0">
              {/* Left group */}
              <div className="flex items-center gap-[12px] md:gap-[24px]">
                <button className="cursor-pointer hover:text-white transition-colors" aria-label="Menu">
                  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
                <div className="bg-[#1D120C] px-3 py-1 rounded text-sm font-semibold tracking-wider min-w-[50px] text-center">
                  1 / 6
                </div>
                <button className="cursor-pointer hover:text-white transition-colors" aria-label="Zoom out">
                  <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <button className="cursor-pointer hover:text-white transition-colors" aria-label="Zoom in">
                  <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>

              {/* Separator 1 */}
              <span className="hidden md:inline text-[#F8B12F] opacity-30 text-lg">|</span>

              {/* Center Left group */}
              <div className="hidden md:flex items-center gap-[20px]">
                <button className="cursor-pointer hover:text-white transition-colors" title="Fit to Screen">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M12 7v10M9 10l3-3 3 3M9 14l3 3 3-3" />
                  </svg>
                </button>
                <button className="cursor-pointer hover:text-white transition-colors" title="Rotate">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
                  </svg>
                </button>
              </div>

              {/* Separator 2 */}
              <span className="hidden md:inline text-[#F8B12F] opacity-30 text-lg">|</span>

              {/* Center Right group */}
              <div className="hidden md:flex items-center gap-[20px]">
                <button className="cursor-pointer hover:text-white transition-colors" title="Draw/Signature">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round">
                    <path d="M3 16c2-4 4-7 7-7s4 6 7 6 5-3 5-6" />
                  </svg>
                </button>
              </div>

              {/* Separator 3 */}
              <span className="hidden md:inline text-[#F8B12F] opacity-30 text-lg">|</span>

              {/* Right group */}
              <div className="hidden md:flex items-center gap-[20px]">
                <button className="cursor-pointer text-[#F8B12F] opacity-40 hover:opacity-100 transition-opacity" title="Undo">
                  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7v6h6M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="cursor-pointer text-[#F8B12F] opacity-40 hover:opacity-100 transition-opacity" title="Redo">
                  <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7v6h-6M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Separator 4 */}
              <span className="hidden sm:inline text-[#F8B12F] opacity-30 text-lg">|</span>

              {/* Far Right group */}
              <div className="flex items-center gap-[16px] md:gap-[24px]">
                <button className="cursor-pointer hover:text-white transition-colors" title="Download">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </button>
                <button className="hidden sm:inline cursor-pointer hover:text-white transition-colors" title="Print">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                </button>
                <button className="cursor-pointer hover:text-white transition-colors" aria-label="More options">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Body */}
            <div className="flex bg-[#F8B12F] h-auto md:h-[500px] overflow-hidden pdf-viewer-body max-md:flex-col">
              {/* Sidebar */}
              <div className="w-full md:w-[180px] bg-transparent p-3 md:p-5 flex flex-row md:flex-col gap-3 md:gap-5 overflow-x-auto md:overflow-x-hidden overflow-y-hidden md:overflow-y-auto border-b md:border-b-0 md:border-r border-[#3D2B1F]/15 pdf-viewer-sidebar">
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <div key={num} className="flex flex-col items-center flex-shrink-0 w-[80px] md:w-full">
                    <div className="w-full bg-white border-[3px] p-1 cursor-pointer transition-all border-[#3d3393] hover:border-blue-400">
                      <img src={mapImage} alt="" className="w-full h-auto block" />
                    </div>
                    <div className="text-xs text-dark-brown mt-1 font-bold">{num}</div>
                  </div>
                ))}
              </div>
              
              {/* Main View */}
              <div className="flex-1 m-3 bg-white rounded-sm flex items-center justify-center overflow-auto pdf-main-view">
                <img 
                  src={mapImage} 
                  alt="Venue Map" 
                  className="pdf-page-image" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
