import React, { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import { Link } from 'react-router-dom';

export const ProjectsSlide = ({limite}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % limite);
        }, 5000);

        return () => clearInterval(interval);
    }, [limite]);

  return (
    <section className='works-slide'>
      {
        projects.slice(0, limite).map((project, index) => {
          const isVisible = index === currentIndex;
          return (
            <article key={project.id} className={`work-item-slide ${isVisible ? 'slideIn' : 'slideOut'}`}>
              <Link to={"/project/" + project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='mask-slide'>
                  <img src={`/images/${project.id}.png`} alt='Imagen de proyecto' />
                </div>
                <span>{project.categorias}</span>
                <h2>{project.nombre}</h2>
                <h3>{project.tecnologias}</h3>
              </Link>
            </article>
          );
        })
      }
    </section>
  );
}
