import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectList } from './ProjectList'

export const Inicio = () => {
  /*Pagina de inicio, pagina en la cual presento mi perfil*/
  return (
    <div className='home'>
      <h1 className='home-text'>
        Hi! i'm Miguel Alan Quintana, a <strong>Computer Science Engineer </strong>
        graduated from the UACH, located in Chihuahua, Chihuahua.
      </h1>
      <h2 className='home-text'>
        I have knowledge in both <strong>Frontend</strong> and <strong>Backend</strong>, 
        as well as knowledge in data science and different approaches to the broad field of computer 
        science.
      </h2>
      <h2 className='home-text'>
        I'm a person who enjoys creating web pages and is looking forward to
        take my professional journey in this topic, and in the future, incorporate all of the 
        different fields I learned in my career and fuse them together.
        For more information about me, my profile and skills: <Link to='/contact'>Contact me</Link>.
      </h2>
      {/*En esta seccion llamo al modulo ProjectList con un limite para que solo me muestre 2 proyectos y sus accesos.*/}
      <section className='latest-works'>
        <h2 className='heading'>Some of my latest projects</h2>
        <ProjectList limite="2"/>
      </section>
    </div>
  )
}
