import React from 'react'

import { Link } from 'react-router-dom'
import Typewriter from './hooks/typewriter'


export const Presentacion = () => {
  return (
    <div className='cover-letter'>
      <h1 className="home-greetings">
        Hi!
      </h1>
      <h1 className='home-text'>
        <Typewriter
          text={`I'm <strong>Miguel Quintana</strong>, and I build things for the web. My hobby is exploring Data Science and Machine Learning projects. This is my portfolio, where I showcase my projects, along with links to my social media and contact information.

          <br/>

          I’m a <strong>Computer Science Engineer</strong> with a strong passion for developing user-centered applications using industry-standard frontend frameworks and creating efficient, scalable backend solutions.

          <br/>

          Feel free to reach out to me if you want us to work together!`}
          htmlContent={<>
            I'm <strong>Miguel Quintana</strong>, and I build things for the web. My hobby is exploring Data Science and Machine Learning projects. This is my portfolio, where I showcase my projects, along with links to my social media and contact information.

            <br />

            I’m a <strong>Computer Science Engineer</strong> with a strong passion for developing user-centered applications using industry-standard frontend frameworks and creating efficient, scalable backend solutions.

            <br />

            Feel free to reach out to me if you want us to work together!
          </>}
        />
      </h1>

      <div className="button-media">
        <h1>
          <Link className='button-socialmedia' to='/#social-network'
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('.socialNetwork').scrollIntoView({ behavior: 'smooth' });
            }}
          >Contact me</Link>
        </h1>
      </div>

      {/* 
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
        For more information about me, my profile and skills: <Link to='/#social-network'
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('.socialNetwork').scrollIntoView({ behavior: 'smooth' });
          }}
        >Contact me</Link>.
      </h2> */}
    </div>
  )
}
