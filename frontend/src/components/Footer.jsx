import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logos">
              <img src="/think-india-logo.png" alt="Think India" className="footer-logo think-india-logo" />
              <img src="/mnnit-logo.png" alt="MNNIT" className="footer-logo mnnit-logo" />
            </div>
            <h3>Think India MNNIT</h3>
            <p>Nation First | Youth for Bharat | Leaders of Tomorrow</p>
            <div className="social-links">
              <a href="https://instagram.com/thinkindiamnnit" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/team">Team</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/join">Join Us</Link></li>
              <li><Link to="/suggestions">Suggestion Box</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: thinkindia@mnnit.ac.in</p>
            <p>MNNIT Allahabad Campus</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Think India MNNIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


