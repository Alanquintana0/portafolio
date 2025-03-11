import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

export const LinkedIn = () => {
  return (
    <div className="linkedin-section">
      <div className="linkedin-content">
        <h2>¡Conectemos en LinkedIn!</h2>
        <p>Descubre más sobre mi experiencia profesional y mantente al día con mis últimas actualizaciones.</p>
        <a 
          href="https://www.linkedin.com/in/tu-perfil" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="linkedin-button"
        >
          <FaLinkedin /> Visitar Perfil
        </a>
      </div>
    </div>
  )
} 