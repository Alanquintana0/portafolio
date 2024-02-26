import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>
      {/*Creamos un formulario que mandara un correo electronico a la persona que lo rellene.*/}
      <form className='contact' action='mailto:quintanamiguel0902@gmail.com'>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='E-mail'></input>
          <textarea placeholder='Contact reason'/>
          <input type='submit' value='Send'></input>      
      </form>
    </div>
  )
}
