# 🏥 MediSync — Premium Doctor Appointment Ecosystem

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Stack](https://img.shields.io/badge/Stack-MERN-informational.svg)
![Animations](https://img.shields.io/badge/Animations-GSAP-green.svg)

**MediSync** is a high-performance, full-stack medical appointment management system redesigned with a **premium SaaS aesthetic**. It provides a seamless experience for Patients, Doctors, and Administrators.

---

## ✨ Features (v2.0 UI/UX Overhaul)

- 🎨 **Premium Aesthetic** — Sleek slate-and-accent color palette with glassmorphism components
- 🎞️ **Smooth Animations** — GSAP-powered staggered reveals, parallax, and transitions
- 🖼️ **3D Hero Assets** — Custom-generated 3D medical imagery
- 📱 **Fully Responsive** — Mobile to ultra-wide display support
- 🔐 **Role-Based Access** — Separate portals for Patients, Doctors, and Admins
- 💳 **Payment Integration** — Razorpay gateway for appointment payments

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend & Admin | React.js (Vite), Tailwind CSS, GSAP, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB (local or Atlas) |
| Image Storage | Cloudinary |
| Payments | Razorpay |
| Auth | JWT (JSON Web Tokens) |

---

## 📁 Project Structure

```
MediSync/
├── backend/      → Express API server (port 4000)
├── frontend/     → Patient-facing React app (port 5173)
└── admin/        → Admin/Doctor React panel (port 5174)
```

---

## 🚀 Setup Guide

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ and npm
- [MongoDB](https://www.mongodb.com/) — local installation OR a free [MongoDB Atlas](https://cloud.mongodb.com) cluster
- [Cloudinary](https://cloudinary.com) free account — **required** for doctor image uploads
- Git

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/himanshu7906/MediSync.git
cd MediSync
```

---

### Step 2 — Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
# MongoDB — use Atlas URI or local
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/medisync
# OR for local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/medisync

CURRENCY=INR
JWT_SECRET=your_strong_random_secret_here

# Cloudinary — get from cloudinary.com → Dashboard
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret

# Admin credentials for the Admin Panel login
ADMIN_EMAIL=admin@medisync.com
ADMIN_PASSWORD=admin123

# Razorpay — optional, only needed for payments
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> ⚠️ **Important:** `CLOUDINARY_*` keys are required to add doctors. Without them, the "Add Doctor" feature will fail with a `401 Unknown API key` error.

Start the backend:

```bash
npm start
```

The server runs at **http://localhost:4000**

---

### Step 3 — Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

Patient app runs at **http://localhost:5173**

---

### Step 4 — Admin Panel Setup

```bash
cd ../admin
npm install
```

Create a `.env` file inside `admin/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin panel:

```bash
npm run dev
```

Admin panel runs at **http://localhost:5174**

---

## 🔑 User Roles & Access

| Role | URL | Credentials |
|---|---|---|
| **Patient** | http://localhost:5173 | Register via Sign Up page |
| **Admin** | http://localhost:5174 | Email & password from `backend/.env` (`ADMIN_EMAIL` / `ADMIN_PASSWORD`) |
| **Doctor** | http://localhost:5174 | Login with credentials set by Admin when adding a doctor |

---

## 🌐 Getting External Service Credentials

### MongoDB Atlas (Free Cloud DB)
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com) → Create free cluster
2. Click **Connect** → **Drivers** → Copy the connection string
3. Replace `<password>` in the URI and paste into `backend/.env`

### Cloudinary (Free Image Hosting)
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Go to **Dashboard** — copy **Cloud Name**, **API Key**, and **API Secret**
3. Paste into `backend/.env`

### Razorpay (Optional — Payments)
1. Sign up at [razorpay.com](https://razorpay.com)
2. Go to **Settings → API Keys** → Generate key
3. Paste `Key ID` and `Key Secret` into `backend/.env`

---

## ⚠️ Common Issues & Fixes

### `JsonWebTokenError: invalid signature`
Your browser has a stale login token from a previous session. Run this in the browser console on both `localhost:5173` and `localhost:5174`:
```js
localStorage.clear(); location.reload();
```
Then log in again.

### `Error adding doctor: Unknown API key 'your_key'`
Cloudinary credentials are not set. Fill in `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_SECRET_KEY` in `backend/.env` with real values from your Cloudinary dashboard.

### `MongoParseError: Invalid scheme`
`MONGODB_URI` is still the placeholder value. Replace it with your real MongoDB connection string (Atlas or local).

### `E11000 duplicate key error` on register
The email you're trying to register already exists in the database. Use a different email or log in instead.

### Razorpay crash on backend start
The backend will **not** crash if Razorpay keys are missing — it will only return an error when a payment is actually attempted. You can leave the Razorpay keys as placeholders if you don't need payments.

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
