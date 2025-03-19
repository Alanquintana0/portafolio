import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects';

export const ProjectCard = () => {
  return (
    <div className='card'>
        <div className="card-img">

        </div>
        <div className="card-description">
            <h1>Proyecto</h1>
            <p>Descripción</p>
            <p>Categoria</p>
        </div>
    </div>
  )
}
