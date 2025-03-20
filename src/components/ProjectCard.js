import React from 'react'
import { useParams } from 'react-router-dom'


export const ProjectCard = ({ project }) => {
  const params = useParams();

  return (
    <div className='card-container'>
        <div className="card-img">
        <img src={`/images/${project.id}.png`} alt='Imagen de proyecto'/>
        </div>
        <div className="card-description">
            <h1>{project.nombre}</h1>
            <p>{ project.descripcion }</p>
            <p>{ project.categorias }</p>
        </div>
    </div>
  )
}
