import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'roorkee', name: 'IIT Roorkee Convention' },
    { id: 'kumbh', name: 'Kumbh Seva' },
    { id: 'maghmela', name: 'Magh Mela' },
    { id: 'youthday', name: 'National Youth Day' },
    { id: 'logodesign', name: 'Logo Design Competition' },
    { id: 'team', name: 'Team Photos' }
  ]

  const galleryImages = {
    roorkee: [
      '/gallery/roorkee/img1.jpg',
      '/gallery/roorkee/img2.jpg',
      '/gallery/roorkee/img3.jpg'
    ],
    kumbh: [
      '/gallery/kumbh/img1.jpg',
      '/gallery/kumbh/img2.jpg',
      '/gallery/kumbh/img3.jpg',
      '/gallery/kumbh/img4.jpg'
    ],
    maghmela: [
      '/gallery/maghmela/img1.jpg',
      '/gallery/maghmela/img2.jpg',
      '/gallery/maghmela/img3.jpg'
    ],
    youthday: [
      '/gallery/youthday/img1.jpg',
      '/gallery/youthday/img2.jpg',
      '/gallery/youthday/img3.jpg'
    ],
    team: [
      '/gallery/team/img1.jpg',
      '/gallery/team/img2.jpg',
      '/gallery/team/img3.jpg',
      '/gallery/team/img4.jpg'
    ]
  }

  const getFilteredImages = () => {
    if (selectedCategory === 'all') {
      return Object.values(galleryImages).flat()
    }
    return galleryImages[selectedCategory] || []
  }

  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <main className="gallery-page">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Media Gallery</h2>
          
          {/* Category Filter */}
          <div className="gallery-filters">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {getFilteredImages().map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setLightboxImage(image)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <span className="view-icon">👁</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
          <img src={lightboxImage} alt="Gallery" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  )
}

export default Gallery


