# Project Structure

```
think-india-mnnit/
│
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets (images, etc.)
│   │   ├── demo-logo.png        # Main logo (add your logo here)
│   │   ├── events/              # Event images
│   │   │   ├── roorkee/
│   │   │   ├── kumbh/
│   │   │   ├── maghmela2024/
│   │   │   ├── youthday2025/
│   │   │   └── logodesign/
│   │   ├── gallery/             # Gallery images
│   │   │   ├── roorkee/
│   │   │   ├── kumbh/
│   │   │   ├── maghmela/
│   │   │   ├── youthday/
│   │   │   ├── logodesign/
│   │   │   └── team/
│   │   ├── team/                # Team member photos
│   │   │   └── core/
│   │   └── faculty/             # Faculty photos
│   │
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   └── Footer.css
│   │   │
│   │   ├── pages/               # Page components
│   │   │   ├── Home.jsx         # Home page
│   │   │   ├── About.jsx        # About Us page
│   │   │   ├── Events.jsx       # Events page
│   │   │   ├── EventCalendar.jsx # Calendar page
│   │   │   ├── Gallery.jsx      # Gallery page
│   │   │   ├── Team.jsx         # Team page
│   │   │   ├── JoinUs.jsx       # Join Us form
│   │   │   ├── SuggestionBox.jsx # Suggestion form
│   │   │   └── Contact.jsx      # Contact page
│   │   │
│   │   ├── App.jsx              # Main app component
│   │   ├── App.css
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   │
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
│
├── data/                        # Excel files (created automatically)
│   ├── join_us.xlsx            # Join Us form submissions
│   ├── suggestions.xlsx        # Suggestion box submissions
│   └── event_notifications.xlsx # Event notification registrations
│
├── server.js                    # Backend Express server
├── package.json                 # Root package.json
│
├── README.md                    # Main documentation
├── SETUP.md                     # Setup instructions
├── QUICK_START.md              # Quick start guide
├── IMAGE_PLACEHOLDERS.md       # Image requirements
└── PROJECT_STRUCTURE.md        # This file
```

## Key Files

### Backend
- **server.js**: Express server with API endpoints and Excel file handling

### Frontend Pages
- **Home.jsx**: Landing page with hero section and featured content
- **About.jsx**: About Think India, vision, purpose, and internship programs
- **Events.jsx**: Past and upcoming events with timeline
- **EventCalendar.jsx**: Interactive monthly calendar
- **Gallery.jsx**: Media gallery with category filters
- **Team.jsx**: Core team and faculty coordinators
- **JoinUs.jsx**: Membership application form
- **SuggestionBox.jsx**: Feedback and suggestion form
- **Contact.jsx**: Contact information and map

### Data Storage
All form submissions are stored in Excel files in the `data/` folder. The folder is created automatically when the server starts.

## Image Paths

All images in `frontend/public/` are served from the root path:
- `/demo-logo.png` → `frontend/public/demo-logo.png`
- `/events/roorkee/img1.jpg` → `frontend/public/events/roorkee/img1.jpg`
- `/gallery/kumbh/img1.jpg` → `frontend/public/gallery/kumbh/img1.jpg`

## API Endpoints

- `POST /api/join` - Submit join application
- `POST /api/suggestion` - Submit suggestion
- `POST /api/event-notify` - Register for event notifications
- `GET /api/data/:type` - Get data (admin access)


