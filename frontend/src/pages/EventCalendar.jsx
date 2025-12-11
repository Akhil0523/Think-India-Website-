import React, { useState } from 'react'
import './EventCalendar.css'

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const events = [
    { date: new Date(2025, 0, 12), title: 'National Youth Day', type: 'major' },
    { date: new Date(2025, 1, 15), title: 'Ideathon 2025', type: 'major' },
    { date: new Date(2025, 2, 10), title: 'Policy Dialogue Series', type: 'regular' },
    { date: new Date(2025, 2, 20), title: 'Social Service Week', type: 'regular' },
    { date: new Date(2025, 3, 5), title: 'Think India Orientation', type: 'regular' },
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.getDate() === date &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    )
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const renderCalendar = () => {
    const days = []
    const totalDays = daysInMonth(currentDate)
    const firstDay = firstDayOfMonth(currentDate)
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
      const dayEvents = getEventsForDate(day)
      days.push(
        <div key={day} className={`calendar-day ${dayEvents.length > 0 ? 'has-events' : ''}`}>
          <div className="day-number">{day}</div>
          {dayEvents.length > 0 && (
            <div className="day-events">
              {dayEvents.map((event, idx) => (
                <div key={idx} className={`event-dot ${event.type}`} title={event.title}></div>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="calendar-grid">
        {dayNames.map(day => (
          <div key={day} className="calendar-header">{day}</div>
        ))}
        {days}
      </div>
    )
  }

  const upcomingEventsList = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date - b.date)
    .slice(0, 5)

  return (
    <main className="calendar-page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Event Calendar</h2>
          
          <div className="calendar-wrapper">
            <div className="calendar-container card">
              <div className="calendar-header-bar">
                <button className="calendar-nav-btn" onClick={prevMonth}>‹</button>
                <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                <button className="calendar-nav-btn" onClick={nextMonth}>›</button>
              </div>
              {renderCalendar()}
            </div>

            <div className="calendar-sidebar">
              <div className="upcoming-events-sidebar card">
                <h3>Upcoming Events</h3>
                <div className="events-list">
                  {upcomingEventsList.map((event, idx) => (
                    <div key={idx} className="event-item">
                      <div className="event-date-box">
                        <div className="event-day">{event.date.getDate()}</div>
                        <div className="event-month">{monthNames[event.date.getMonth()].substring(0, 3)}</div>
                      </div>
                      <div className="event-info">
                        <h4>{event.title}</h4>
                        <p>{event.date.toLocaleDateString('en-US', { weekday: 'long' })}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="legend card">
                <h4>Legend</h4>
                <div className="legend-items">
                  <div className="legend-item">
                    <span className="event-dot major"></span>
                    <span>Major Event</span>
                  </div>
                  <div className="legend-item">
                    <span className="event-dot regular"></span>
                    <span>Regular Event</span>
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

export default EventCalendar


