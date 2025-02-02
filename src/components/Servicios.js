import React from 'react'
import { FaLaptopCode, FaPencilRuler, FaSearch, FaChartBar } from 'react-icons/fa';

//Se exporta este modulo que contiene un resumen de los servicios ofrecidos.
export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>

      <section className='services'>
        <article className='service'>
          <div className='service-icon'>
            <FaPencilRuler />
          </div>
          <h2>Diseño web</h2>
          <p>Diseño de tu página web para una vista agradable e intuitiva a los clientes.</p>
        </article>

        <article className='service'>
          <div className='service-icon'>
            <FaLaptopCode />
          </div>
          <h2>Desarrollo web</h2>
          <p>Creo tu página web desde cero con tecnologías y estándares actuales.</p>
        </article>

        <article className='service'>
          <div className='service-icon'>
            <FaSearch />
          </div>
          <h2>Posicionamiento web</h2>
          <p>Hago que tu página web aparezca en los principales sitios de búsqueda para mayor alcance.</p>
        </article>

        <article className='service'>
          <div className='service-icon'>
            <FaChartBar />
          </div>
          <h2>Análisis de datos</h2>
          <p>Análisis de datos y creación de modelos predictivos en base a estos para la ayuda a la toma de decisiones.</p>
        </article>
      </section>
    </div>
  )
}
