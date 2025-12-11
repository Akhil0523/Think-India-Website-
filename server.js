const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('frontend/public'));
app.use('/uploads', express.static('uploads'));

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Helper function to read/write Excel files
function readExcelFile(filePath) {
  if (fs.existsSync(filePath)) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  }
  return [];
}

function writeExcelFile(filePath, data) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, filePath);
}

// API Routes

// Join Us Form
app.post('/api/join', (req, res) => {
  try {
    const { name, yearBranch, phone, email, reason } = req.body;
    const filePath = path.join(dataDir, 'join_us.xlsx');
    
    const existingData = readExcelFile(filePath);
    const newEntry = {
      'Name': name,
      'Year/Branch': yearBranch,
      'Phone': phone,
      'Email': email,
      'Reason': reason,
      'Date': new Date().toISOString()
    };
    
    existingData.push(newEntry);
    writeExcelFile(filePath, existingData);
    
    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting application' });
  }
});

// Suggestion Box Form
app.post('/api/suggestion', (req, res) => {
  try {
    const { name, email, suggestion, submitToHigherAuthorities } = req.body;
    const filePath = path.join(dataDir, 'suggestions.xlsx');
    
    const existingData = readExcelFile(filePath);
    const newEntry = {
      'Name': name,
      'Email': email,
      'Suggestion/Issue': suggestion,
      'Submit to Higher Authorities': submitToHigherAuthorities ? 'Yes' : 'No',
      'Date': new Date().toISOString()
    };
    
    existingData.push(newEntry);
    writeExcelFile(filePath, existingData);
    
    res.json({ success: true, message: 'Suggestion submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting suggestion' });
  }
});

// Event Notification
app.post('/api/event-notify', (req, res) => {
  try {
    const { eventName, email, name } = req.body;
    const filePath = path.join(dataDir, 'event_notifications.xlsx');
    
    const existingData = readExcelFile(filePath);
    const newEntry = {
      'Event Name': eventName,
      'Name': name,
      'Email': email,
      'Date': new Date().toISOString()
    };
    
    existingData.push(newEntry);
    writeExcelFile(filePath, existingData);
    
    res.json({ success: true, message: 'You will be notified about this event!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error registering for notification' });
  }
});

// Get all data (for admin purposes)
app.get('/api/data/:type', (req, res) => {
  try {
    const { type } = req.params;
    const filePath = path.join(dataDir, `${type}.xlsx`);
    
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }
    
    const data = readExcelFile(filePath);
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

