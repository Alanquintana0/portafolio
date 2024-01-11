import React from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom'

export const ProjectList = ({limite}) => {
  return (
      <section className='works'>
        {
        projects.slice(0, limite).map(project => {
          return(
            <article key={project.id} className='work-item'>
              <div className='mask'>
                <img src={'/images/'+project.id+".png"}/>
              </div>
              <span>{project.categorias}</span>
              <h2><Link to={"/project/"+project.id}>{project.nombre}</Link></h2>
              <h3>{project.tecnologias}</h3>
            </article>
           )
         })
        }
      </section>
  )
}
