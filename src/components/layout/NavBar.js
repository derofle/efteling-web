import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left">Efteling API</Link>
        <ul className="right">
        <li><NavLink to='/'>Attracties</NavLink></li>
        <li><NavLink to='/'>Shows</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar