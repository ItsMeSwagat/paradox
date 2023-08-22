import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className='nav-container'>
        <Link className='link'>Home</Link>
        <Link className='link'>Features</Link>
        <Link className='link'>Download</Link>
        <Link className='link'>Career</Link>
        <Link className='link'>Pricing</Link>
      </nav>
    </div>
  )
}

export default Navbar