import React from 'react'


export const ProjectCard = ({ project }) => {

  return (
    <div className='card-container'>
        <div className="card-img">
        <img src={`/images/${project.idName}.png`} alt='Imagen de proyecto'/>
        </div>
        <div className="card-description">
            <h1>{project.name}</h1>
            <p>{ project.description }</p>
            <p>{ project.category }</p>
        </div>
    </div>
  )
}
