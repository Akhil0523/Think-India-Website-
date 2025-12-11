# Installing Node.js - Required for This Project

## ❌ Current Issue
Node.js and npm are not installed on your system. They are required to run this website.

## ✅ Solution: Install Node.js

### Option 1: Download from Official Website (Recommended)

1. **Visit**: https://nodejs.org/
2. **Download**: Click on the "LTS" (Long Term Support) version - this is the stable version
3. **Install**: 
   - Run the downloaded installer (.msi file)
   - Follow the installation wizard
   - **IMPORTANT**: Make sure to check the box that says "Add to PATH" during installation
4. **Verify Installation**:
   - Close and reopen your terminal/PowerShell
   - Run: `node --version`
   - Run: `npm --version`
   - Both should show version numbers

### Option 2: Using Chocolatey (If you have it)

If you have Chocolatey package manager installed:
```powershell
choco install nodejs
```

### Option 3: Using Winget (Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

1. **Close and reopen your terminal/PowerShell** (important for PATH to update)

2. **Verify installation**:
   ```powershell
   node --version
   npm --version
   ```

3. **Navigate to project folder**:
   ```powershell
   cd "C:\Users\Kanha\Desktop\think india"
   ```

4. **Install project dependencies**:
   ```powershell
   npm run install-all
   ```

5. **Start the development server**:
   ```powershell
   npm run dev
   ```

## What Node.js Includes

- **Node.js**: JavaScript runtime for the backend server
- **npm**: Package manager (comes with Node.js) for installing dependencies

## Minimum Requirements

- **Node.js**: Version 16.x or higher (LTS recommended)
- **npm**: Version 8.x or higher (comes with Node.js)

## Troubleshooting

### If npm is still not recognized after installation:

1. **Restart your computer** (sometimes required for PATH updates)

2. **Or manually add to PATH**:
   - Node.js is usually installed at: `C:\Program Files\nodejs\`
   - Add this to your system PATH environment variable

3. **Check installation location**:
   ```powershell
   Get-Command node -ErrorAction SilentlyContinue
   ```

## Need Help?

- Node.js Official Docs: https://nodejs.org/en/docs/
- Node.js Download: https://nodejs.org/en/download/

---

**Once Node.js is installed, come back and run `npm run install-all` to continue!**


