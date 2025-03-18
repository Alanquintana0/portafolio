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
          text={`I'm <strong>Miguel Quintana</strong>, and I build things for the web. My hobby is exploring Data Science and Machine Learning projects. This is my portafolio, where I showcase my projects, along with links to my social media and contact information.

          I'm a <strong>Computer Science Engineer</strong> with a strong passion for developing user-centered applications using industry-standard frontend frameworks and creating efficient, scalable backend solutions.

          Feel free to <strong>reach out to me</strong> if you want us to work together!`}
          htmlContent={<>
            <p>
              I'm <strong>Miguel Quintana</strong>, and I build things for the web. My hobby is exploring Data Science and Machine Learning projects. This is my portafolio, where I showcase my projects, along with links to my social media and contact information.
            </p>

            <p>
              I'm a <strong>Computer Science Engineer</strong> with a strong passion for developing user-centered applications using industry-standard frontend frameworks and creating efficient, scalable backend solutions.
            </p>

            <p>
              Feel free to{' '}
              <strong>
              <Link 
                to='/#social-network'
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('.socialNetwork').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                reach out to me
              </Link>
              {' '}</strong>if you want us to work together!
            </p>
          </>}
        />
      </h1>

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
