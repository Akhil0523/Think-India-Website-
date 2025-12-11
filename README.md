# Think India MNNIT Website

Official website for Think India MNNIT chapter - A student-driven initiative to cultivate a "Nation First" mindset and promote youth participation in national development.

## Features

- **Home Page**: Hero section with logo, slogan, and quick navigation
- **About Us**: Complete information about Think India vision, purpose, and internship programs
- **Events**: Timeline of past events and upcoming events with notification system
- **Event Calendar**: Interactive monthly calendar with event markers
- **Gallery**: Media gallery with category filters
- **Team**: Core team members and faculty coordinators
- **Join Us**: Application form for new members
- **Suggestion Box**: Feedback and suggestion submission system
- **Contact Us**: Contact information and campus map

## Tech Stack

- **Frontend**: React 18 with Vite
- **Backend**: Node.js with Express
- **Data Storage**: Excel files (using xlsx library)
- **Styling**: Custom CSS with Think India brand colors

## Installation

1. Install dependencies:
```bash
npm run install-all
```

2. Start development server:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3000`

## Production Build

1. Build frontend:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## Project Structure

```
think-india-mnnit/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components (Navbar, Footer)
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json
├── data/                   # Excel files for data storage
├── server.js               # Backend server
└── package.json
```

## Image Folders

Place your images in the following structure:

- `/public/demo-logo.png` - Main logo
- `/public/events/roorkee/` - IIT Roorkee convention images
- `/public/events/kumbh/` - Kumbh Seva images
- `/public/events/maghmela2024/` - Magh Mela images
- `/public/events/youthday2025/` - National Youth Day images
- `/public/events/logodesign/` - Logo design competition images
- `/public/gallery/roorkee/` - Gallery images
- `/public/gallery/kumbh/` - Gallery images
- `/public/gallery/maghmela/` - Gallery images
- `/public/gallery/youthday/` - Gallery images
- `/public/gallery/logodesign/` - Gallery images
- `/public/gallery/team/` - Team photos
- `/public/team/core/` - Core team member photos
- `/public/faculty/` - Faculty coordinator photos

## Data Storage

All form submissions are stored in Excel files in the `data/` folder:

- `join_us.xlsx` - Join Us form submissions
- `suggestions.xlsx` - Suggestion box submissions
- `event_notifications.xlsx` - Event notification registrations

## API Endpoints

- `POST /api/join` - Submit join application
- `POST /api/suggestion` - Submit suggestion
- `POST /api/event-notify` - Register for event notifications
- `GET /api/data/:type` - Get data (for admin purposes)

## Brand Colors

- Saffron: `#FF9933`
- White: `#FFFFFF`
- Green: `#138808`
- Yellow: `#FFD700`

## License

© 2025 Think India MNNIT. All rights reserved.


