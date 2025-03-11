import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

export const SocialNetwork = () => {
  return (
    <div className="linkedin-section">
      <div className="wave-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave wave1">
          <path fill="#0099ff" fillOpacity="0.1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave wave2">
          <path fill="#0099ff" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,101.3C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave wave3">
          <path fill="#0099ff" fillOpacity="0.15" d="M0,256L48,229.3C96,203,192,149,288,133.3C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="linkedin-nombre" style={{ position: 'relative', zIndex: 2 }}>
        <h2>Lets connect at LinkedIn</h2>
        <p>Discover more about my profile!</p>
        <a
          href="https://www.linkedin.com/in/miguel-alan-quintana-montano-063321279"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <FaLinkedin /> Visitar Perfil
        </a>
        <br />
        <p>or</p>
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="gmail-button"
        >
          <SiGmail /> Contact Me
        </a>
      </div>
    </div>
  );
}
