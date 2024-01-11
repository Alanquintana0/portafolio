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
          Computer science engineering student with knowledge and skills focused
          on building client-oriented websites using Frontend frameworks and
          technologies such as React, JavaScript, Node.js, etc.
        </p>
        <p>
          Looking forward to growing and improving my professional skills in a work
          environment with new challenges for constant growth.
        </p>
      </section>
      <section className="section-2">
        <div className="skills">
          <p>
            <strong>SKILLS</strong>
          </p>
          <ul className="skills-list">
            <li>Fluency in JavaScript, Python, HTML, CSS, and React</li>
            <li>English and Spanish</li>
            <li>Knowledge in SQL</li>
            <li>Knowledge in C, C++, and Java</li>
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
              UACH engineering faculty | Sept 2023 - Today
            </p>
            <ul className="responsibilities">
              <li>Social service provided in the engineering faculty</li>
              <li>Manage social service providers inside the faculty</li>
              <li>Support events inside the faculty</li>
            </ul>
          </div>
          <div className="experiences">
            <p className="job-title">CASHIER</p>
            <p className="job-title">
              EL CUCHILLO, TOMAS FERNANDEZ | Jan 2021 - Dec 2021
            </p>
            <ul className="responsibilities">
              <li>Inventory management</li>
              <li>Billing to clients</li>
              <li>Cash management</li>
              <li>Customer service</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="academic">
          <p>
            <strong>ACADEMIC FORMATION</strong>
          </p>
          <div className="experiences">
            <p className="job-title">UNIVERSIDAD AUTONOMA DE CHIHUAHUA</p>
            <p className="job-title">
              COMPUTER SCIENCE ENGINEERING, 9TH SEMESTER
            </p>
            <ul className="responsibilities">
              <li>
                Web application development using SQL, NoSQL, and heterogeneous
                databases.
              </li>
              <li>
                Development of  predictive models using classification and regression.
                Predictive and generation models using recurrent neural networks with
                Keras, TensorFlow, NumPy, and scikit-learn.
              </li>
              <li>Use of modern frameworks for web development.</li>
            </ul>
          </div>
          <div className="academic">
            <div className="experiences">
              <p className="job-title">CBTA 90</p>
              <p className="job-title">GRADUATED IN 2019</p>
              <ul className="responsibilities">
                <li>
                  Graduated from the programming technician career in high school
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="other-skills">
          <p>
            <strong>OTHER SKILLS</strong>
          </p>
          <ul>
            <li>
              High capacity for communicating problems and solutions in a team.
            </li>
            <li>
              Ability to identify and solve problems.
            </li>
            <li>
              Bilingual communication skills.
            </li>
            <li>
              Critical thinking for evaluation of different solutions and approaches
            </li>
            <li>
              Ability to adapt to new technologies, methodologies and changing project requirements
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
