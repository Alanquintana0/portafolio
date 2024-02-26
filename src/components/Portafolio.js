import React from 'react'
import { ProjectList } from './ProjectList'

export const Portafolio = () => {
  //Pagina en la que presentamos los proyectos, esta llama a nuestro modulo ProjectList que es el que los despliega en pantalla
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <ProjectList/>
    </div>
  )
}