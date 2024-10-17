import React from 'react'
//Recibimos nuestros proyectos
import { projects } from '../data/projects'
import { Link } from 'react-router-dom';

//Recibimos la variable limite de nuestro componente inicio
export const ProjectList = ({limite}) => {
  return (
      <section className='works'>
        {
          //Utilizamos el metodo slice para copiar nuestro array, si recibimos el parametro limite se copiaran solo el numero de elementos
          //del valor de limite, si no se copiara todo nuestro arreglo.
          //Con la variable map iteramos todos nuestros proyectos dentro de el arreglo projects.
        projects.slice(0, limite).map(project => {
          return(
            <article key={project.id} className='work-item'>
              <Link to={"/project/"+project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className='mask'>
                  <img src={`/images/${project.id}.png`} alt='Imagen de proyecto'/>
                    {/*<img src={'/portafolio/images/'+project.id+".png"}/>*/}
                  </div>
                  <span>{project.categorias}</span>
                  <h2>{project.nombre}</h2> 
                  <h3>{project.tecnologias}</h3>
                </Link>
            </article>
           )
         })
        }
      </section>
  )
}
