import React from 'react'
import { NavLink } from 'react-router-dom'
import './navegacion.css'

function Navegacion() {
  return (
    <>
    <nav className='navegador'>
    <div className='contendor'>
        <ul className='navMenu'>
          <li><NavLink className="link-menu" to="/">Home</NavLink></li>
          <li><NavLink className="link-menu" to="/conocenos">Conocenos</NavLink></li>
          <li><NavLink className="link-menu" to="/Menu">Menu</NavLink></li>
          <li><NavLink className="link-menu" to="/Reservas">Reservaciones</NavLink></li>
        </ul>
      </div>
    </nav>
       
    </>
  )
}

export default Navegacion