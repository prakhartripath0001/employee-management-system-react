# Employee Management System

A premium, modern Employee Management System built with React, Vite, and Tailwind CSS. The app features a dark, high-end theme with ambient glows, glassmorphism card designs, and smooth micro-animations.

## Features

- **Interactive Employee Dashboard**:
  - Live task status counter cards (New, Active, Completed, Failed).
  - Horizontally scrollable task queue layout.
  - Interactive status controls (Accept, Complete, Fail tasks) with immediate metrics update.
- **Administrative Portal**:
  - Auto-routing for administrative accounts.
  - Access log and environment configuration status.
- **Robust Authentication Flow**:
  - Secure Login view with error validation.
  - Show and hide password visibility toggle.
  - "Remember Password" configuration persistent in local storage.
- **Reactive State Sync**:
  - All changes made to task statuses are reactively synced to local state and synchronized with `localStorage`.

## Credentials (Mock Database)

The database initializes with the following default logins:

### Employee Accounts
- **Employee 1**: `employee1@example.com` (Password: `123`, Name: `Aarav`)
- **Employee 2**: `employee2@example.com` (Password: `123`, Name: `Vihaan`)
- **Employee 3**: `employee3@example.com` (Password: `123`, Name: `Ananya`)

### Administrator Accounts
- **Admin**: `admin@example.com` (Password: `123`, Name: `Prakhar`)

## Tech Stack

- **Frontend**: React (v19)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v3)

## Getting Started

### Prerequisites

- Node.js installed on your local machine.

### Installation & Launch

1. Clone or navigate to the directory:
   ```bash
   cd "employee management system"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build the application for production:
   ```bash
   npm run build
   ```
