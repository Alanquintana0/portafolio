import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>

      <form className='contact' action='mailto:quintanamiguel0902@gmail.com'>
          <input type='text' placeholder='Nombre'></input>
          <input type='text' placeholder='E-mail'></input>
          <textarea placeholder='Motivo de contacto'/>
          <input type='submit' value='Enviar'></input>      
      </form>
    </div>
  )
}
