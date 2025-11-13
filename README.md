# 🍕 FoodHub - MERN Food Delivery App

A full-stack food delivery platform built with MongoDB, Express.js, React, and Node.js.

## ✨ Features

- 🔐 User authentication (JWT)
- 🍽️ Browse restaurants and menus
- 🛒 Shopping cart functionality
- 💳 Secure payment integration
- 📱 Responsive design
- 👨‍💼 Admin dashboard
- 📦 Order tracking
- ⭐ Restaurant ratings & reviews

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- React Router
- Context API / Redux
- Axios
- Tailwind CSS / Material-UI

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

**Payment:**
- Stripe / Razorpay

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/Kafoor-Nimas/food-delivery.git
cd food-delivery
```

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Add your environment variables
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Create `.env` file in backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
```

## 📸 Screenshots

[Add screenshots here]

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
