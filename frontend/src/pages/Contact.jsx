import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card card">
                <h3>Get in Touch</h3>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:thinkindiamnnitclub@gmail.com">thinkindiamnnitclub@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Instagram</h4>
                    <a href="https://instagram.com/thinkindiamnnit" target="_blank" rel="noopener noreferrer">
                      @thinkindiamnnit
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Campus Office Location</h4>
                    <p>MNNIT Allahabad Campus<br />
                    Prayagraj, Uttar Pradesh<br />
                    India</p>
                  </div>
                </div>
              </div>

              <div className="quick-links card">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/join">Join Us</a></li>
                  <li><a href="/suggestions">Suggestion Box</a></li>
                  <li><a href="/events">Upcoming Events</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/team">Meet the Team</a></li>
                </ul>
              </div>
            </div>

            <div className="map-container card">
              <h3>Find Us on Campus</h3>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1234567890123!2d81.8765!3d25.4267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzM2LjEiTiA4McKwNTInMzUuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MNNIT Campus Location"
                ></iframe>
              </div>
              <p className="map-note">
                * Map shows MNNIT Allahabad campus location. For specific office location, 
                please contact us via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact


