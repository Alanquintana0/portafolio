import React from 'react'
import { ProjectList } from './ProjectList'
import { Contacto } from './Contacto'
import { Presentacion } from './Presentacion'
import { Servicios } from './Servicios'
import { SocialNetwork } from './SocialNetwork'

export const Inicio = () => {
  /*Pagina de inicio, pagina en la cual presento mi perfil*/
  return (
    <div className='home'>
      
      <section className="cover-landpage">
        <Presentacion/>
      </section>
      
      {/*En esta seccion llamo al modulo ProjectList con un limite para que solo me muestre 2 proyectos y sus accesos.*/}
      <section className='latest-works'>
        <h2 className='heading'>Some of my latest projects</h2>
        <ProjectList />
      </section>
      <section className="services">
        <Servicios></Servicios>
      </section>
      <section className="socialNetwork">
        <SocialNetwork />
      </section>
      {/*<section className='contact'>
        <Contacto></Contacto>
      </section>*/}
    </div>
  )
}
