# Mushkil Pay

MushkilPay is a **mini Paytm-like** project built using the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Tailwind**. While it lacks many advanced features, it serves as a foundational project for learning full-stack development and implementing a basic money transfer system.

## Features
- User registration and authentication (JWT-based)
- Random balance assigned to users upon sign-up
- View a list of current users
- Search for users
- Send money to other users

## Technologies Used
- **Frontend:** React, Tailwind, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, Zod
- **Authentication:** JWT

## Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Either locally installed or a cloud cluster)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/abuzerexe/MushkilPay.git
cd MushkilPay
```

### 2. Configure the Database
- If using a **local MongoDB**, no changes are needed.
- If using a **MongoDB cluster**, update the **database connection string** in `backend/db.js`.

### 3. Configure JWT Secret
- Set your **JWT secret key** in `backend/config.js`.

### 4. Install Dependencies & Run the Project
Open **two terminals**:

#### Backend Setup
```sh
cd backend
npm install
node index.js
```

#### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## Project Structure
```
MushkilPay/
├── backend/      # Express.js server & database logic
│   ├── config.js # JWT configuration
│   ├── db.js     # Database
│   ├── index.js  #  server
│   ├── routes/   # API routes
│   ├── middleware/   # middlewares
│   ├── package.json
├── frontend/     # frontend(React,Tailwind)
│   ├── src/
|   │   ├── components # components
|   │   ├── pages # pages
|   │   ├── provider # provider
|   │   ├── App.jsx # App
│   ├── package.json
└── README.md
```

## Contributions
Feel free to fork the project and submit a pull request to add more functionality!


---
Made with ❤️ by Muhammad Abuzer Zia

Happy Coding! 🚀

