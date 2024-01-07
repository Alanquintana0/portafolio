import React from "react";

export const Curriculum = () => {
  return (
    <div className="page">
      <section className="section-1">
        <h1 className="heading">MIGUEL ALAN QUINTANA</h1>
        <h2 className="employ">
          <strong>Frontend developer</strong>
        </h2>
        <h3 className="profile">PROFILE</h3>
        <p>
          Computer science engineering student with knoledges and skills focused
          building client-oriented websites using Frontend frameworks and
          technologies such as React, Javascript, NodeJs, etc.
        </p>
        <p>
          Looking forward to grow and improve my professional skills in a work
          environment with new chalenges for a constant growth.
        </p>
      </section>
      <section className="section-2">
        <div className="skills">
          <p>
            <strong>SKILLS</strong>
          </p>
          <ul className="skills-list">
            <li>Fluency in Javascript, Python, HTML, CSS and React</li>
            <li>English and Spanish</li>
            <li>Knowledge in SQL</li>
            <li>Knowledge in C, C++ and Java</li>
            <li>Knowledge in MongoDB</li>
          </ul>
        </div>
        <div className="experience">
          <div className="experiences">
            <p>
              <strong>EXPERIENCE</strong>
            </p>
            <p className="job-title">FING ADMINISTRATIVE</p>
            <p className="job-title">
              UACH engineering faculty | sept 2023 - today
            </p>
            <ul className="responsabilities">
              <li>Social service provided in the engineering faculty</li>
              <li>Manage social service providers inside the faculty</li>
              <li>Support events inside the faculty</li>
            </ul>
          </div>
          <div className="experiences">
            <p className="job-title">CASHIER</p>
            <p className="job-title">
              EL CUCHILLO, TOMAS FERNANDEZ | JAN 2021 - DEC 2021
            </p>
            <ul className="responsabilities">
              <li>Inventory management</li>
              <li>Billing to clients</li>
              <li>Cash management</li>
              <li>Customer service</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
