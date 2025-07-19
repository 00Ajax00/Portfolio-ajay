import { memo, useState, useRef } from 'react';
import privacySecurity from '../assets/Privacy and Security in Online Social Media-1.png';
import dataAnalytics from '../assets/Data Analytics with Python-1.png';
import cyberSecurity from '../assets/Cyber Security and Privacy-1.png';
import networking from '../assets/Demystifying Networking-1.png';
import paloNetwork from '../assets/Palo Alto Networks security operations-1.png';
import paloCloud from '../assets/Palo Alto cloud-1.png';
import paloOperations from '../assets/Palo Alto Networks security operations-1.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const flexRef = useRef(null);

  const certifications = [
    {
      title: 'NPTEL: Privacy and Security in Online Social Media',
      image: privacySecurity,
    },
    {
      title: 'NPTEL: Data Analytics with Python',
      image: dataAnalytics,
    },
    {
      title: 'NPTEL: Cyber Security and Privacy',
      image: cyberSecurity,
    },
    {
      title: 'NPTEL: Demystifying Networking',
      image: networking,
    },
    {
      title: 'Palo Alto: Network Security',
      image: paloNetwork,
    },
    {
      title: 'Palo Alto: Cloud Security',
      image: paloCloud,
    },
    {
      title: 'Palo Alto: Security Operations',
      image: paloOperations,
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const scrollFlex = (direction) => {
    if (flexRef.current) {
      const scrollAmount = direction === 'forward' ? 300 : -300;
      flexRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="certifications animate-on-scroll" aria-labelledby="certifications-title">
      <h2 id="certifications-title" className="animate-glitch">Certifications</h2>
      <div className="certifications-container">
        <button
          className="scroll-btn scroll-btn-left"
          onClick={() => scrollFlex('backward')}
          aria-label="Scroll certifications backward"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button><div className="marquee"><div className="marquee-content">
        <div className="certifications-flex" ref={flexRef}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-item"
              tabIndex="0"
              role="button"
              aria-label={`View ${cert.title} certificate`}
              onClick={() => openModal(cert)}
              onKeyDown={(e) => e.key === 'Enter' && openModal(cert)}
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certification-image"
                  loading="lazy"
                />
              ) : (
                <i className="fa-solid fa-certificate certification-icon"></i>
              )}
              <span>{cert.title}</span>
            </div>
          ))}
        </div></div>
        </div>
        <button
          className="scroll-btn scroll-btn-right"
          onClick={() => scrollFlex('forward')}
          aria-label="Scroll certifications forward"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      {selectedCert && (
        <div className="modal open" role="dialog" aria-labelledby="modal-title">
          <div className="modal-content">
            <button className="close" onClick={closeModal} aria-label="Close certificate preview">
              ×
            </button>
            <h2 id="modal-title" className="animate-glitch">{selectedCert.title}</h2>
            {selectedCert.image ? (
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="modal-image"
                loading="lazy"
              />
            ) : (
              <i className="fa-solid fa-certificate modal-icon"></i>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Certifications);