import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <img src="/think-india-logo.png" alt="Think India" className="logo-img think-india-logo" />
            <img src="/mnnit-logo.png" alt="MNNIT" className="logo-img mnnit-logo" />
            <span className="logo-text">Think India MNNIT</span>
          </Link>
          
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/events" className={isActive('/events') ? 'active' : ''}>Events</Link></li>
            <li><Link to="/calendar" className={isActive('/calendar') ? 'active' : ''}>Calendar</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
            <li><Link to="/team" className={isActive('/team') ? 'active' : ''}>Team</Link></li>
            <li><Link to="/join" className="btn-nav">Join Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


