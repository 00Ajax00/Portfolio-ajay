import { useState, useEffect, useRef } from 'react';
import resumePdf from '../assets/common.pdf';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
      resumeBtn.addEventListener('click', openModal);
    }
    return () => resumeBtn?.removeEventListener('click', openModal);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      id="resume-modal"
      className={`modal ${isOpen ? 'open' : ''}`}
      onClick={closeModal}
      role="dialog"
      aria-labelledby="resume-modal-title"
      aria-modal="true"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()} ref={modalRef} tabIndex="-1">
        <button
          id="close-modal"
          className="close"
          onClick={closeModal}
          aria-label="Close resume modal"
        >
          ×
        </button>
        <h2 id="resume-modal-title">My Resume</h2>
        <p>Here's a preview of my resume. You can download it below.</p>
        <div className="iframe-container">
          <iframe
            src={resumePdf}
            className="resume-iframe"
            title="Resume Preview"
            aria-describedby="resume-modal-title"
          ></iframe>
          <div className="iframe-fallback">
            <p>Your browser does not support PDF previews. Please download the resume.</p>
            <a href={resumePdf} className="btn" download aria-label="Download Ajay Vijayan's resume">
              Download Resume
            </a>
          </div>
        </div>
        <a href={resumePdf} className="btn" download aria-label="Download Ajay Vijayan's resume">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;