# 🏥 MediSync - Premium Doctor Appointment Ecosystem

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-informational.svg)
![GSAP](https://img.shields.io/badge/Animations-GSAP-green.svg)

**MediSync** is a high-performance, full-stack medical appointment management system. Redesigned with a **premium SaaS aesthetic**, it offers a seamless experience for Patients, Doctors, and Administrators.

---

## ✨ New in v2.0 (UI/UX Overhaul)

We have completely modernized the user interface to provide a world-class healthcare experience:

- 🎨 **Premium Aesthetic**: Sleek slate-and-accent color palette with advanced glassmorphism components.
- 🎞️ **Smooth Animations**: Powered by **GSAP (GreenSock)** for high-frame-rate staggered reveals, parallax effects, and smooth transitions.
- 🖼️ **3D Hero Assets**: Custom-generated 3D medical assets for a modern, trustworthy feel.
- 📱 **Fully Responsive**: Optimized for everything from mobile devices to ultra-wide displays.

---

## 🛠️ Tech Stack

### Frontend & Admin
- **React.js (Vite)**: Lightning-fast development and build times.
- **Tailwind CSS**: Utility-first styling with custom premium design tokens.
- **GSAP**: Industry-leading animation engine for orchestrated UI reveals.
*   **React Router Dom**: Client-side routing for SPA experience.

### Backend
- **Node.js & Express**: Scalable server-side logic.
- **MongoDB**: Robust NoSQL database for flexible data management.
- **Cloudinary**: Professional image hosting for doctor and user profiles.
- **Stripe / Razorpay**: Secure payment gateway integrations.

---

## 🚀 Installation & Setup

Follow these steps to get your local environment running.

### 1. Prerequisite
Ensure you have **Node.js** and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/medisync.git
cd medisync
```

### 3. Backend Configuration
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_uri
CURRENCY=USD
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
CLOUDINARY_NAME=your_name
ADMIN_EMAIL=admin@medisync.com
ADMIN_PASSWORD=admin123
```
**Start Backend:** `npm start`

### 4. Frontend Configuration
```bash
cd ../frontend
npm install
npm run dev
```
Create a `.env` file in the `frontend` folder:
```env
VITE_BACKEND_URL=http://localhost:4000
```

### 5. Admin Panel Configuration
```bash
cd ../admin
npm install
npm run dev
```
Create a `.env` file in the `admin` folder:
```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🔑 User Roles

| Role | Access Level | Key Features |
| :--- | :--- | :--- |
| **Patient** | Public Web | Book appointments, Pay online, View history, Edit profile. |
| **Doctor** | Doctor Dashboard | Manage schedule, View earnings, Update availability, Patient logs. |
| **Admin** | Admin Panel | Add/Edit doctors, Manage all appointments, System analytics. |

---

## 🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request for any enhancements.

## 📄 License
This project is licensed under the MIT License.
