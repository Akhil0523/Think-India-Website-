import React from 'react'
import './About.css'

const About = () => {
  const internshipPrograms = [
    {
      name: 'ANUBHOOTI',
      description: 'An experiential learning program that provides hands-on experience in social work and community engagement, helping students understand ground realities and develop empathy.'
    },
    {
      name: 'VIDHI',
      description: 'A legal awareness and policy research program that engages students in understanding constitutional values, legal frameworks, and policy-making processes.'
    },
    {
      name: 'NITI',
      description: 'A policy research and analysis program that encourages students to study and contribute to policy discourse on national development and governance.'
    },
    {
      name: 'SANSADIYA',
      description: 'A parliamentary engagement program that provides insights into the functioning of Indian democracy, legislative processes, and citizen participation.'
    },
    {
      name: 'SAMVAD',
      description: 'A dialogue and discussion platform that facilitates meaningful conversations on national issues, bringing together diverse perspectives and ideas.'
    },
    {
      name: 'SHURUAT',
      description: 'An entrepreneurship and innovation program that supports students in developing solutions for social challenges and building sustainable initiatives.'
    }
  ]

  return (
    <main className="about-page">
      {/* Think India Overview */}
      <section className="section circular-pattern">
        <div className="container">
          <h2 className="section-title">About Think India</h2>
          <div className="about-content">
            <div className="vision-section">
              <h3>Our Vision</h3>
              <div className="vision-points">
                <div className="vision-card card">
                  <h4>Nation-First Attitude</h4>
                  <p>Cultivating a mindset that prioritizes national interest and collective welfare over individual gains.</p>
                </div>
                <div className="vision-card card">
                  <h4>National Reconstruction</h4>
                  <p>Contributing to the rebuilding and strengthening of India through active participation and innovative solutions.</p>
                </div>
                <div className="vision-card card">
                  <h4>Youth Leadership Development</h4>
                  <p>Empowering young minds to become leaders who can drive positive change in society and the nation.</p>
                </div>
              </div>
            </div>

            <div className="purpose-section">
              <h3>Our Purpose</h3>
              <div className="purpose-list">
                <div className="purpose-item">
                  <span className="purpose-number">1</span>
                  <p>To inculcate a "Nation First" mindset among students and youth</p>
                </div>
                <div className="purpose-item">
                  <span className="purpose-number">2</span>
                  <p>To promote social responsibility and community engagement</p>
                </div>
                <div className="purpose-item">
                  <span className="purpose-number">3</span>
                  <p>To engage in meaningful policy discourse and research</p>
                </div>
                <div className="purpose-item">
                  <span className="purpose-number">4</span>
                  <p>To encourage youth participation in national development</p>
                </div>
                <div className="purpose-item">
                  <span className="purpose-number">5</span>
                  <p>To build leadership skills and civic awareness</p>
                </div>
                <div className="purpose-item">
                  <span className="purpose-number">6</span>
                  <p>To connect students with social organizations and initiatives</p>
                </div>
                <div className="purpose-item">
                  <span className="purpose-number">7</span>
                  <p>To foster a sense of pride and responsibility towards the nation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Internship Programs</h2>
          <div className="internship-grid">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="internship-card card">
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MNNIT Chapter Overview */}
      <section className="section circular-pattern">
        <div className="container">
          <h2 className="section-title">Think India MNNIT Chapter</h2>
          <div className="chapter-content">
            <div className="chapter-info card">
              <h3>Our Chapter</h3>
              <p>
                The Think India MNNIT chapter was established to bring the vision and mission of Think India 
                to the MNNIT campus. We are committed to engaging students in meaningful activities that 
                promote national consciousness, social responsibility, and leadership development.
              </p>
              <h4>Our Mission</h4>
              <ul>
                <li>Campus engagement through events and discussions</li>
                <li>Policy discourse and research initiatives</li>
                <li>Social work and community service</li>
                <li>Student leadership building and skill development</li>
              </ul>
              <h4>Activities</h4>
              <p>
                MNNIT students actively participate in national conventions, policy workshops, social service 
                initiatives, campus events, and leadership development programs. We organize regular discussions, 
                seminars, and hands-on projects that connect theory with practice.
              </p>
            </div>

            <div className="why-join card">
              <h3>Why Join Think India MNNIT?</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">🤝</span>
                  <div>
                    <h4>Work with Social Organizations</h4>
                    <p>Partner with NGOs and social initiatives to make a real impact</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <div>
                    <h4>Participate in National Conventions</h4>
                    <p>Attend and contribute to national-level Think India events</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📚</span>
                  <div>
                    <h4>Attend Policy Workshops</h4>
                    <p>Learn about policy-making, governance, and national development</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🚀</span>
                  <div>
                    <h4>Lead Social and Campus Initiatives</h4>
                    <p>Take charge of projects and develop leadership skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About


