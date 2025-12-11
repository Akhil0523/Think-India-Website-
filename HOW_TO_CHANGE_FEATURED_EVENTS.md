# How to Change Featured Events Images on Home Page

## Quick Guide

The featured events section is located in: `frontend/src/pages/Home.jsx`

## Current Featured Events

There are **3 featured events** displayed on the home page:

### 1. National Youth Day 2025
- **Image Path**: `/events/youthday2025/img1.jpg`
- **Location in code**: Line 64
- **File location**: `frontend/public/events/youthday2025/img1.jpg`

### 2. Think India National Convention
- **Image Path**: `/events/roorkee/img1.jpg`
- **Location in code**: Line 74
- **File location**: `frontend/public/events/roorkee/img1.jpg`

### 3. Kumbh Seva Initiatives
- **Image Path**: `/events/kumbh/bhandara1.jpg`
- **Location in code**: Line 84
- **File location**: `frontend/public/events/kumbh/bhandara1.jpg`

## Method 1: Replace Existing Images (Easiest)

Simply replace the image files with your new images, keeping the same filenames:

1. **For National Youth Day**: Replace `frontend/public/events/youthday2025/img1.jpg`
2. **For National Convention**: Replace `frontend/public/events/roorkee/img1.jpg`
3. **For Kumbh Seva**: Replace `frontend/public/events/kumbh/bhandara1.jpg`

## Method 2: Change Image Paths in Code

If you want to use different images or add new events:

1. Open `frontend/src/pages/Home.jsx`
2. Find the "Featured Events" section (around line 57-94)
3. Change the `src` attribute in the `<img>` tags

### Example:

```jsx
<div className="event-card card">
  <div className="event-image">
    <img src="/events/youthday2025/img1.jpg" alt="National Youth Day" />
  </div>
  <div className="event-content">
    <h3>National Youth Day 2025</h3>
    <p>Your description here...</p>
    <Link to="/events" className="btn btn-primary">Learn More</Link>
  </div>
</div>
```

To change the image, just update the `src` path:
```jsx
<img src="/your-new-image-path.jpg" alt="National Youth Day" />
```

## Method 3: Add More Featured Events

To add a 4th featured event, copy one of the event cards and modify it:

```jsx
<div className="event-card card">
  <div className="event-image">
    <img src="/events/your-event/img1.jpg" alt="Your Event Name" />
  </div>
  <div className="event-content">
    <h3>Your Event Title</h3>
    <p>Your event description...</p>
    <Link to="/events" className="btn btn-primary">Learn More</Link>
  </div>
</div>
```

## Image Requirements

- **Format**: JPG or PNG
- **Recommended Size**: 800x600px or larger
- **Aspect Ratio**: 4:3 or 16:9 works best
- **File Size**: Keep under 500KB for fast loading

## File Structure

All images should be placed in:
```
frontend/public/events/
  ├── youthday2025/
  │   └── img1.jpg
  ├── roorkee/
  │   └── img1.jpg
  └── kumbh/
      └── bhandara1.jpg
```

## After Making Changes

1. Save the file
2. The development server will automatically reload
3. Refresh your browser to see the changes

## Quick Reference

**File to edit**: `frontend/src/pages/Home.jsx`  
**Section**: Lines 57-94 (Featured Events)  
**Images folder**: `frontend/public/events/`

---

**Tip**: If you want to feature different events, you can also change the titles and descriptions in the same section!


