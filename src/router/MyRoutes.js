import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom"
import {Inicio} from "../components/Inicio";
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer'
import { Project } from '../components/Project';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      {/*Header y navegacion*/}
      <Header />
      {/*Contenido central*/}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to='/inicio'/>}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/contact" element={<Contacto />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
          <Route path="/services" element={<Servicios />}></Route>
          <Route path='/project/:id' element={<Project/>}></Route>
          <Route path='*' element={
            <div className='page'>
              <h1 className='heading'>Error 404</h1>
            </div>
          }></Route>
        </Routes>
      </section>

      {/*Footer*/}
      <Footer />
    </BrowserRouter>
  );
}
