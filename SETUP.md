# Setup Guide for Think India MNNIT Website

## Quick Start

1. **Install Dependencies**
   ```bash
   npm run install-all
   ```

2. **Add Images**
   - Place `demo-logo.png` in the `public/` folder
   - Add event images to respective folders in `public/events/`
   - Add gallery images to respective folders in `public/gallery/`
   - Add team photos to `public/team/core/`
   - Add faculty photos to `public/faculty/`

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Access the Website**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Required Images

### Logo
- `public/demo-logo.png` - Main Think India MNNIT logo

### Events Images
- `public/events/roorkee/img1.jpg`, `img2.jpg`
- `public/events/kumbh/bhandara1.jpg`, `tea1.jpg`, `cloth1.jpg`
- `public/events/maghmela2024/img1.jpg`
- `public/events/youthday2025/img1.jpg`
- `public/events/logodesign/img1.jpg`

### Gallery Images
- `public/gallery/roorkee/img1.jpg`, `img2.jpg`, `img3.jpg`
- `public/gallery/kumbh/img1.jpg`, `img2.jpg`, `img3.jpg`, `img4.jpg`
- `public/gallery/maghmela/img1.jpg`, `img2.jpg`, `img3.jpg`
- `public/gallery/youthday/img1.jpg`, `img2.jpg`, `img3.jpg`
- `public/gallery/logodesign/img1.jpg`, `img2.jpg`
- `public/gallery/team/img1.jpg`, `img2.jpg`, `img3.jpg`, `img4.jpg`

### Team Images
- `public/team/core/member1.jpg` through `member8.jpg`

### Faculty Images
- `public/faculty/coordinator1.jpg`
- `public/faculty/coordinator2.jpg`

## Data Storage

All form submissions are automatically saved to Excel files in the `data/` folder:
- `join_us.xlsx` - Join Us applications
- `suggestions.xlsx` - Suggestion box submissions
- `event_notifications.xlsx` - Event notification registrations

The `data/` folder is created automatically when the server starts.

## Production Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Set environment variable:
   ```bash
   set NODE_ENV=production
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will serve both the API and the built frontend.

## Troubleshooting

- **Port already in use**: Change the port in `server.js` (line 8) or `frontend/vite.config.js` (line 6)
- **Images not showing**: Ensure images are in the correct folders with exact filenames
- **Excel files not created**: Check that the `data/` folder has write permissions

## Customization

- **Colors**: Edit CSS variables in `frontend/src/index.css`
- **Content**: Edit page components in `frontend/src/pages/`
- **Team Members**: Edit `frontend/src/pages/Team.jsx`
- **Events**: Edit `frontend/src/pages/Events.jsx`


