import React, { useState } from 'react'
import './SuggestionBox.css'

const SuggestionBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
    submitToHigherAuthorities: false
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/suggestion', {
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
          email: '',
          suggestion: '',
          submitToHigherAuthorities: false
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(data.message || 'Error submitting suggestion')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="suggestion-box-page">
      <section className="section circular-pattern">
        <div className="container">
          <div className="suggestion-content">
            <div className="suggestion-intro">
              <h2 className="section-title">Your Ideas Matter!</h2>
              <p className="intro-text">
                We value your thoughts, suggestions, and feedback. Your input helps us improve 
                and grow. Share your ideas, report issues, or suggest improvements. 
                All suggestions are carefully reviewed and considered.
              </p>
              <div className="info-box card">
                <h3>How It Works</h3>
                <ul>
                  <li>Fill out the form with your suggestion or issue</li>
                  <li>Optionally check the box to submit to higher authorities</li>
                  <li>We review all submissions regularly</li>
                  <li>Your feedback helps shape our initiatives</li>
                </ul>
              </div>
            </div>

            <div className="suggestion-form-container card">
              <h3>Suggestion Box</h3>
              {success && (
                <div className="success-message">
                  ✓ Suggestion submitted successfully! Thank you for your input.
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
                    placeholder="Enter your name"
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
                  <label htmlFor="suggestion">Suggestion/Issue *</label>
                  <textarea
                    id="suggestion"
                    name="suggestion"
                    required
                    value={formData.suggestion}
                    onChange={handleChange}
                    placeholder="Share your suggestion, idea, or report an issue..."
                    rows="6"
                  />
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="submitToHigherAuthorities"
                    name="submitToHigherAuthorities"
                    checked={formData.submitToHigherAuthorities}
                    onChange={handleChange}
                  />
                  <label htmlFor="submitToHigherAuthorities">
                    Submit to Higher Authorities
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Suggestion'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SuggestionBox


