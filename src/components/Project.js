import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects';

export const Project = () => {
    //Creamo un estado para iterar en nuestros proyectos.
    const [project, setProject] = useState({});
    //Recibimos los parametros de nuestro proyecto.
    const params = useParams();

    //Usamos el hook useEffect para recibir filtrar nuestro proyecto y desplegarlo, este hook se ejecutara una vez despues del primer renderizado
    useEffect(()=>{
      //Filtramos el proyecto por id dentro de nuestros proyectos.
        console.log(projects)
        let project = projects.filter(project => project.id===params.id);
        console.log(project);
        setProject(project[0])
    },[]);

  //Ya con el proyecto filtrado, desplegamos todos sus elementos usando los parametros recibidos.
  return (
    <div className='page page-work'>
        <div className='mask'>
        <img src={`/images/${project.id}.png`} alt='Imagen de proyecto'/>
        </div>
        <h1 className='heading'>{project ? project.nombre : 'Cargando...'}</h1> 
        <p>{project ? project.tecnologias : 'Cargando...'}</p> 
        <p>{project ? project.descripcion : 'Cargando...'}</p> 
        <a href={project ? project.url : '#'} target='_blank' rel='noreferrer'>Go to project</a> 
    </div>
  )
}
