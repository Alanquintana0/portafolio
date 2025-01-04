import React from 'react'
//Usamos NavLink para navegar entre las paginas de nuestro sitio.
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <header className='header'>
        {/*Span del logo de header*/}
        <div className='logo'>
            <span>M</span>
            <h3>Miguel Alan Quintana</h3>
        </div>
        
        {/*Usamos nav y una lista no ordenada para listar los sitios de nuestro header y creando el acceso directo usando navLink.*/}
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/portafolio' className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to='/services' className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum' className={({isActive}) => isActive ? "active" : ""}>Resume</NavLink>
                </li>
                {/*Link to 
                <li>
                    <NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
                contact page*/}
                
            </ul>
        </nav>
        
        
    </header>
  )
}
