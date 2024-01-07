import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      
      <h1>
        Hi! i'm Miguel Alan Quintana, a <strong>Computer Science Engineering </strong>
        student at the UACH, located in Chihuahua, Chihuahua.
      </h1>
      <h2>
        I have knowledge in both <strong>Frontend</strong> and <strong>Backend</strong>, 
        as well as knowledge in data science and different approaches to the broad field of computer 
        science.
      </h2>
      <h2>
        I'm a person who enjoys creating web pages and is looking forward to
        take my professional journey in this topic, and in the future, incorporate all of the 
        different fields I learned in my career and fuse them together.
        For more information about me, my profile and skills: <Link to='/contact'>Contact me</Link>.
      </h2>
      <section className='latest-works'>
        <h2 className='heading'>Some of my latest projects</h2>
        <p>Web development</p>
        <div className='works'></div>
      </section>
    </div>
  )
}
