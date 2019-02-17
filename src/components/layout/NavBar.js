import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = ({metaData}) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo left">Efteling API</Link>
        <ul className="right">
        <li><NavLink to='/attraction'>Attracties</NavLink></li>
        <li><NavLink to='/show'>Shows</NavLink></li>
        <li><h5>{metaData.BusyIndication}</h5></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar