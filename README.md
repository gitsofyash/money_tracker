# Money Tracker - MERN Stack Project

## Introduction
Money Tracker is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) to help users track their income and expenses.

## Features
- Add and view transactions
- Calculate balance
- Responsive design

## Technologies Used
- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (hosted on MongoDB Atlas)

## File Directory Structure
```
money-tracker/
├── api/                # Backend (Express.js)
│   ├── models/        # MongoDB models
│   └── index.js       # Backend server setup
├── src/                # Frontend (React.js)
│   ├── App.js         # Main React component
│   └── index.js       # React app entry point
├── .env                # Environment variables
└── README.md          # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js and Yarn installed
- MongoDB Atlas account

### Steps
#### Clone the repository:
```bash
git clone <repository-url>
cd money-tracker
```

#### Set up the backend:
```bash
cd api
yarn install
# Create a .env file with MongoDB URL
node index.js
```

#### Set up the frontend:
```bash
cd ..
yarn install
# Create a .env file with API URL
yarn start
```

## API Endpoints
- **POST** `/api/transaction` - Add a new transaction.
- **GET** `/api/transactions` - Fetch all transactions.


