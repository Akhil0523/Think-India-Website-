import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero circular-pattern">
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <img src="/think-india-logo.png" alt="Think India Logo" className="hero-logo-main" />
              <img src="/mnnit-logo.png" alt="MNNIT Logo" className="hero-logo-mnnit" />
            </div>
            <h1 className="hero-title">Think India MNNIT</h1>
            <p className="hero-slogan">Nation First | Youth for Bharat | Leaders of Tomorrow</p>
            <p className="hero-description">
              Think India MNNIT is a student-driven initiative inspired by the national Think India movement 
              to cultivate a "Nation First" mindset, promote social responsibility, engage in policy discourse, 
              and encourage youth participation in national development.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">About Us</Link>
              <Link to="/join" className="btn btn-secondary">Join Think India MNNIT</Link>
              <Link to="/events" className="btn btn-outline">Upcoming Events</Link>
              <Link to="/gallery" className="btn btn-outline">Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Active Members</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Events Organized</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Social Initiatives</p>
            </div>
            <div className="stat-card">
              <h3>6</h3>
              <p>Internship Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="featured-events section">
        <div className="container">
          <h2 className="section-title">Featured Events</h2>
          <div className="events-grid">
            <div className="event-card card">
              <div className="event-image">
                <img src="/events/youthday2025/ydfeatured.jpg" alt="National Youth Day" />
              </div>
              <div className="event-content">
                <h3>National Youth Day 2025</h3>
                <p>Celebrating Swami Vivekananda's ideals with discussions on youth responsibility and innovation.</p>
                <Link to="/events" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="event-card card">
              <div className="event-image">
                <img src="/events/roorkee/tincfeatured.jpg" alt="National Convention" />
              </div>
              <div className="event-content">
                <h3>Think India National Convention</h3>
                <p>Participated in the National Convention at IIT Roorkee focusing on national development.</p>
                <Link to="/events" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="event-card card">
              <div className="event-image">
                <img src="/events/kumbh/bhandara1.jpg" alt="Kumbh Seva" />
              </div>
              <div className="event-content">
                <h3>Kumbh Seva Initiatives</h3>
                <p>Active service during Maha Kumbh with Bhandara, tea distribution, and cloth donation.</p>
                <Link to="/events" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section circular-pattern">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join Think India MNNIT and be part of the change</p>
            <Link to="/join" className="btn btn-primary">Join Us Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home


