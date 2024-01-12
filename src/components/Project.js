import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects';

export const Project = () => {
    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(()=>{
        let project = projects.filter(project => project.id===params.id);
        setProject(project[0])
    },[]);

  return (
    <div className='page page-work'>
        <div className='mask'>
                <img src={'/portafolio/images/'+project.id+".png"}/>
        </div>
        <h1 className='heading'>{project.nombre}</h1>
        <p>{project.tecnologias}</p>
        <p>{project.descripcion}</p>
        <a href={project.url} target='_blank'>Go to project</a>
    </div>
  )
}
