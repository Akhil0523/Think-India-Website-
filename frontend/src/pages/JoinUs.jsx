import React, { useState } from 'react'
import './JoinUs.css'

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    yearBranch: '',
    phone: '',
    email: '',
    reason: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setFormData({
          name: '',
          yearBranch: '',
          phone: '',
          email: '',
          reason: ''
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(data.message || 'Error submitting application')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="join-us-page">
      <section className="section circular-pattern">
        <div className="container">
          <div className="join-content">
            <div className="join-intro">
              <h2 className="section-title">Join Think India MNNIT</h2>
              <p className="intro-text">
                Become a part of a movement that's shaping the future of our nation. 
                Join us in our mission to cultivate a "Nation First" mindset and 
                contribute to national development.
              </p>
              <div className="benefits-box">
                <h3>What You'll Gain:</h3>
                <ul>
                  <li>Leadership development opportunities</li>
                  <li>Networking with like-minded individuals</li>
                  <li>Participation in national conventions</li>
                  <li>Hands-on experience in social work</li>
                  <li>Policy research and analysis skills</li>
                  <li>Community engagement and impact</li>
                </ul>
              </div>
            </div>

            <div className="join-form-container card">
              <h3>Application Form</h3>
              {success && (
                <div className="success-message">
                  ✓ Application submitted successfully! We'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="yearBranch">Year/Branch *</label>
                  <input
                    type="text"
                    id="yearBranch"
                    name="yearBranch"
                    required
                    value={formData.yearBranch}
                    onChange={handleChange}
                    placeholder="e.g., 2nd Year, CSE"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Why do you want to join Think India? *</label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Tell us about your motivation and what you hope to contribute..."
                    rows="5"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default JoinUs


