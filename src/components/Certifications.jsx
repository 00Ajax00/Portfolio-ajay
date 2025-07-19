import { memo } from 'react';
import privacySecurity from '../assets/Privacy and Security in Online Social Media-1.png';
import dataAnalytics from '../assets/Data Analytics with Python-1.png'; 
import cyberSecurity from '../assets/Cyber Security and Privacy-1.png'; 
import networking from '../assets/Demystifying Networking-1.png'; 
// import paloFundamentals from '../assets/Cyber Security Fundamentals.png'; 
import paloNetwork from '../assets/Palo Alto Networks security operations-1.png'; 
import paloCloud from '../assets/Palo Alto cloud-1.png'; 
import paloOperations from '../assets/Palo Alto Networks security operations-1.png'; 
// import infosysJava from '../assets/Java Developer Certification.png'; 
// import infosysAI from '../assets/Generative AI Certification.png'; 
// import ibmCloud from '../assets/IBM Cloud Computing.png'; 

const Certifications = () => {
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
    // {
    //   title: 'Palo Alto: Cyber Security Fundamentals',
    //   image: paloFundamentals,
    // },
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
    // {
    //   title: 'INFOSYS: Java Developer Certification',
    //   image: infosysJava,
    // },
    // {
    //   title: 'INFOSYS: Generative AI Certification',
    //   image: infosysAI,
    // },
    // {
    //   title: 'Coursera: IBM Cloud Computing',
    //   image: ibmCloud,
    // },
  ];

  return (
    <section id="certifications" className="certifications animate-on-scroll" aria-labelledby="certifications-title">
      <h2 id="certifications-title" className="animate-glitch">Certifications</h2>
      <div className="marquee">
        <div className="marquee-content">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-item"
              tabIndex="0"
              aria-label={`Certification: ${cert.title}`}
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
          {/* Duplicate for seamless marquee looping */}
          {certifications.map((cert, index) => (
            <div
              key={`duplicate-${index}`}
              className="certification-item"
              tabIndex="0"
              aria-label={`Certification: ${cert.title}`}
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
        </div>
      </div>
    </section>
  );
};

export default memo(Certifications);