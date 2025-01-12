import React from 'react'

import { Link } from 'react-router-dom'


export const Presentacion = () => {
  return (
    <div>
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
    </div>
  )
}
