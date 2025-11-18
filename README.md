# 🍕 Tomato - MERN Food Delivery App

A full-stack food delivery platform built with MongoDB, Express.js, React, and Node.js.

![Tomato Homepage](./screenShots/homepage.png)

## ✨ Features

- 🔐 User authentication (JWT)
- 🛒 Shopping cart functionality
- 💳 Secure payment integration
- 📱 Responsive design
- 👨‍💼 Admin dashboard
- 📦 Order tracking

## 🛠️ Tech Stack

**Frontend:**

- React.js (Vite)
- React Router
- Context API / Redux
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

**Payment:**

- Stripe

## 📦 Installation

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm

- **Live Demo**: [https://food-delivery-mern-theta.vercel.app/]

### Clone the repository

```bash
git clone https://github.com/Kafoor-Nimas/Food-Delivery-MERN.git
cd Food-del
```

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your environment variables
npm run server
```

### Frontend Setup

```bash
cd front-end
npm install
npm run dev
```

## 🔐 Environment Variables

Create `.env` file in backend directory:

```env
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

📸 Screenshots

Home Page
![Tomato Homepage](./screenShots/full-page.png)

## 🚀 Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Railway / Heroku
- Database: MongoDB Atlas

## 👨‍💻 Author

**Kafoor Nimas**

- GitHub: [@Kafoor-Nimas](https://github.com/Kafoor-Nimas)

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from popular food delivery apps
- Built with Vite for fast development experience
