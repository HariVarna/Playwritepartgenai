# 🎓 EduManager & Playwright End-to-End Automation Suite

A modern **Student Management System (EduManager)** web application paired with an automated **Playwright E2E Testing Suite**.

This repository contains both the frontend web application and full-flow automated browser testing scripts to validate user workflows from login, dashboard metrics, student registration, search, and record management.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Repository Structure](#-repository-structure)
- [Web Application Features](#-web-application-features)
- [Playwright Test Suite](#-playwright-test-suite)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Project](#-running-the-project)
  - [1. Run Automated Playwright Tests](#1-run-automated-playwright-tests)
  - [2. Run with UI Mode](#2-run-with-ui-mode)
  - [3. View Test Reports](#3-view-test-reports)
  - [4. Run Web Application Standalone](#4-run-web-application-standalone)
- [Playwright Configuration Details](#-playwright-configuration-details)
- [Demo Credentials](#-demo-credentials)

---

## 🌟 Overview

- **Web Application**: A responsive single-page portal built with HTML5, CSS3, and JavaScript featuring a dashboard, registration system, data filters, modals, and management tools.
- **Automation Framework**: Built with **Playwright Test**, automated against Chromium with live visual execution (`slowMo`), failure artifacts (screenshots, traces, videos), and automatic local web server lifecycle management.

---

## 📂 Repository Structure

```text
Playwritepartgenai/
├── README.md
└── playwright-big-demo/
    ├── package.json               # Node.js dependencies & scripts
    ├── package-lock.json
    ├── playwright.config.js       # Playwright runner & webServer config
    ├── tests/
    │   └── student-management.spec.js  # 18-step E2E workflow test
    ├── webpage/                   # Frontend Student Management Portal
    │   ├── index.html             # UI layout and sections
    │   ├── style.css              # Custom styling & animations
    │   └── script.js              # State management, DOM events & logic
    ├── playwright-report/         # Generated HTML test execution reports
    └── test-results/              # Test execution artifacts (traces, videos)
```

---

## 🖥️ Web Application Features

The frontend application (`webpage/`) includes:

1. **Authentication & Session Management**:
   - Secure login form with credential verification and error handling.
   - Demo credentials support and session logout functionality.

2. **Dashboard Overview**:
   - High-level metric cards: Total Students, New Registrations, Active Courses, and System Status.
   - Quick action shortcuts (Register Student, View Directory, Courses, Reports).
   - Dynamic table showing recent student registrations.

3. **Student Registration**:
   - Form fields: Full Name, Email, Phone Number, Course selection (Playwright, Python, etc.), City, and Status.
   - Client-side validation with success feedback toast notifications.
   - Real-time updates to dashboard metrics and student directory.

4. **Student Directory & Management**:
   - Paginated tabular list of registered students.
   - **Live Search**: Instant filter by student name or email address.
   - **Course Filter**: Filter records by enrolled training program.
   - **Edit Modal**: In-place modification of student name and email.
   - **Delete Action**: Instant removal of student records from state.

5. **Courses & Analytics**:
   - Course catalog and overview views.
   - Visual performance and registration reporting sections.

---

## 🤖 Playwright Test Suite

The test suite (`tests/student-management.spec.js`) executes an 18-step end-to-end journey:

| Step | Action | Assertion / Verification |
| :--- | :--- | :--- |
| **01** | Opens base URL (`http://127.0.0.1:3000`) | Page loads successfully |
| **02** | Validates Portal landing | Checks `Student Portal` header is visible |
| **03-05** | Inputs username (`admin`) & password (`admin123`) | Submits login form |
| **06** | Dashboard Verification | Verifies `Dashboard` heading is visible |
| **07** | Opens Registration Form | Clicks `Register Student` navigation action |
| **08-12** | Fills Student Information | Inputs Name, Email, Phone, Course, and City |
| **13-14** | Submits Form | Verifies `"Student registered successfully!"` message |
| **15-16** | Navigates to Students list | Verifies `Students` directory view opens |
| **17** | Enters student name in Search input | Filters table by registered student name |
| **18** | Record Verification | Confirms registered student appears in table |

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or newer recommended)
- `npm` (bundled with Node.js)

---

## 📦 Installation & Setup

1. **Navigate to the demo directory**:
   ```bash
   cd playwright-big-demo
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browser binaries**:
   ```bash
   npx playwright install chromium
   ```

---

## 🚀 Running the Project

### 1. Run Automated Playwright Tests

Runs the full end-to-end test suite. The configuration automatically spins up the local web server on port `3000` before running tests:

```bash
cd playwright-big-demo
npx playwright test
```

### 2. Run with UI Mode

To use Playwright's interactive visual UI runner (time-travel debugging, DOM inspection):

```bash
cd playwright-big-demo
npx playwright test --ui
```

### 3. View Test Reports

After running the tests, view the comprehensive HTML test report:

```bash
cd playwright-big-demo
npx playwright show-report
```

### 4. Run Web Application Standalone

If you want to run and explore the web application manually in your browser:

```bash
cd playwright-big-demo
npx http-server webpage -p 3000
```

Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 🔧 Playwright Configuration Details

Configuration in `playwright.config.js`:

- **Base URL**: `http://127.0.0.1:3000`
- **Headless**: `false` (shows the browser window during test execution)
- **slowMo**: `1500ms` (slows down actions for visual inspection & demonstration)
- **Web Server**: Automatically launches `npx http-server webpage -p 3000`
- **Reporters**: `list` (console output) and `html` (interactive HTML report)
- **Failure Artifacts**: Screenshots and traces captured on failure

---

## 🔑 Demo Credentials

| Role | Username | Password |
| :--- | :--- | :--- |
| **Administrator** | `admin` | `admin123` |
