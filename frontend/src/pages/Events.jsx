import React, { useState } from 'react'
import './Events.css'

const Events = () => {
  const [notifyEvent, setNotifyEvent] = useState(null)
  const [notifyData, setNotifyData] = useState({ name: '', email: '' })
  const [notifySuccess, setNotifySuccess] = useState(false)

  const pastEvents = [
    {
      id: 1,
      title: 'Think India National Convention – IIT Roorkee',
      description: 'Team Think India MNNIT participated in the National Convention at IIT Roorkee. The theme revolved around national development, youth leadership, and policy dialogue. Distinguished speakers, policymakers, academicians, and social leaders interacted with students.',
      images: ['https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg', 'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg'],
      date: '2024'
    },
    {
      id: 2,
      title: 'MNNIT Think India – Kumbh Seva Initiatives',
      description: 'Think India MNNIT actively served devotees and workers during Maha Kumbh – organising Bhandara, distributing tea at night, and donating clothes to the needy.',
      subEvents: [
        { name: 'Bhandara Service', images: ['/events/kumbh/bhandara1.jpg'] },
        { name: 'Night Tea Distribution', images: ['/events/kumbh/tea1.jpg'] },
        { name: 'Cloth Donation Drive', images: ['/events/kumbh/cloth1.jpg'] }
      ],
      date: '2024'
    },
    {
      id: 3,
      title: 'National Youth Day – 12 January 2025',
      description: 'A grand celebration dedicated to Swami Vivekananda\'s ideals. Students discussed youth responsibility, nationalism, and innovation. Guest: Ashosh Chauhan ji',
      images: ['/events/youthday2025/img1.jpg'],
      date: '12 January 2025'
    },
    {
      id: 4,
      title: 'Magh Mela Seva – 2024',
      description: 'Think India MNNIT volunteers participated in the Magh Mela seva initiative, offering essential support to pilgrims and authorities.',
      images: ['/events/maghmela2024/img1.jpg'],
      date: '2024'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'National Youth Day – 12 January 2025',
      description: 'Celebrating Swami Vivekananda\'s ideals with discussions on youth responsibility and innovation.',
      date: '12 January 2025'
    },
    {
      id: 2,
      title: 'Ideathon 2025 – Ideas for India\'s Growth & Development',
      description: 'A platform for students to present innovative ideas for national development and social impact.',
      date: 'Coming Soon'
    },
    {
      id: 3,
      title: 'Policy Dialogue Series – Campus Event',
      description: 'Engaging discussions on policy matters, governance, and national development with experts.',
      date: 'Coming Soon'
    },
    {
      id: 4,
      title: 'Social Service Week – MNNIT Campus',
      description: 'A week-long initiative focusing on community service, awareness campaigns, and social impact.',
      date: 'Coming Soon'
    },
    {
      id: 5,
      title: 'Think India Orientation – New Batch',
      description: 'Welcome session for new members to understand Think India\'s vision, mission, and activities.',
      date: 'Coming Soon'
    }
  ]

  const handleNotifyClick = (eventName) => {
    setNotifyEvent(eventName)
    setNotifySuccess(false)
  }

  const handleNotifySubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/event-notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventName: notifyEvent,
          name: notifyData.name,
          email: notifyData.email
        })
      })
      const data = await response.json()
      if (data.success) {
        setNotifySuccess(true)
        setNotifyData({ name: '', email: '' })
        setTimeout(() => {
          setNotifyEvent(null)
          setNotifySuccess(false)
        }, 2000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <main className="events-page">
      {/* Past Events */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <div className="events-timeline">
            {pastEvents.map((event, index) => (
              <div key={event.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content card">
                  <div className="event-date">{event.date}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {event.images && (
                    <div className="event-images">
                      {event.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`${event.title} ${idx + 1}`} />
                      ))}
                    </div>
                  )}
                  {event.subEvents && (
                    <div className="sub-events">
                      {event.subEvents.map((subEvent, idx) => (
                        <div key={idx} className="sub-event">
                          <h4>{subEvent.name}</h4>
                          <div className="sub-event-images">
                            {subEvent.images.map((img, imgIdx) => (
                              <img key={imgIdx} src={img} alt={subEvent.name} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section circular-pattern">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="upcoming-events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="upcoming-event-card card">
                <div className="event-badge">Upcoming</div>
                <h3>{event.title}</h3>
                <p className="event-date-badge">{event.date}</p>
                <p className="event-description">{event.description}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleNotifyClick(event.title)}
                >
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Modal */}
      {notifyEvent && (
        <div className="modal-overlay" onClick={() => setNotifyEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setNotifyEvent(null)}>×</button>
            {notifySuccess ? (
              <div className="success-message">
                <h3>✓ Success!</h3>
                <p>You will be notified about this event.</p>
              </div>
            ) : (
              <>
                <h3>Get Notified: {notifyEvent}</h3>
                <form onSubmit={handleNotifySubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      value={notifyData.name}
                      onChange={(e) => setNotifyData({ ...notifyData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      required
                      value={notifyData.email}
                      onChange={(e) => setNotifyData({ ...notifyData, email: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default Events


