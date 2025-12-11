import React from 'react'
import './Team.css'

const Team = () => {
  const coreTeam = [
    { name: 'Akhilesh Dwivedi', position: 'Convener', image: '/team/core/member1.jpg', contact: 'president@thinkindiamnnit.in' },
    { name: 'Yashita Yadav', position: 'State Convener', image: '/team/core/member2.jpg', contact: 'vicepresident@thinkindiamnnit.in' },
    { name: 'Satyam Singh', position: 'General Secretary', image: '/team/core/member3.jpg', contact: 'gensec@thinkindiamnnit.in' },
    { name: 'Pawan Kumar', position: 'Joint Secretary', image: '/team/core/member4.jpg', contact: 'jointsec@thinkindiamnnit.in' },
    { name: 'Lahar', position: 'Media Lead', image: '/team/core/member5.jpg', contact: 'media@thinkindiamnnit.in' },
    { name: 'Rushikesh', position: 'Tech Lead', image: '/team/core/member6.jpg', contact: 'events@thinkindiamnnit.in' },
    { name: 'Sajal Dhuriya', position: 'Outreach Coordinator', image: '/team/core/member7.jpg', contact: 'outreach@thinkindiamnnit.in' },
    { name: 'Ayush', position: 'Campus Ambassador Lead', image: '/team/core/member8.jpg', contact: 'ambassador@thinkindiamnnit.in' }
  ]

  const facultyCoordinators = [
    { name: 'Dr. Animesh Ojha', position: 'Primary Faculty Coordinator', image: '/faculty/coordinator1.jpg', contact: '9532830699' },
    { name: 'Dr. Anubhav Rawat', position: 'Primary Faculty Coordinator', image: '/faculty/coordinator1.jpg', contact: '8800990759' },
    { name: 'Dr. Vishal Gaur', position: 'Co-Coordinator', image: '/faculty/coordinator2.jpg', contact: '7253046186' }
  ]

  return (
    <main className="team-page">
      {/* Core Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Team</h2>
          <div className="team-grid">
            {coreTeam.map((member, index) => (
              <div key={index} className="team-card card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-contact">{member.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="section circular-pattern">
        <div className="container">
          <h2 className="section-title">Faculty Coordinators</h2>
          <div className="faculty-grid">
            {facultyCoordinators.map((faculty, index) => (
              <div key={index} className="faculty-card card">
                <div className="faculty-image">
                  <img src={faculty.image} alt={faculty.name} />
                </div>
                <div className="faculty-info">
                  <h3>{faculty.name}</h3>
                  <p className="faculty-position">{faculty.position}</p>
                  <p className="faculty-contact">{faculty.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team


