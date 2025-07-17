backend/
├── config/
│   └── db.js                  # MongoDB connection setup
│
├── controllers/               #Bussiness logic
│   └── authController.js      # Handles logic for register & login
│
├── middleware/
│   └── authMiddleware.js      # Middleware to protect routes (JWT)
│
├── models/
│   └── User.js                # User schema/model
│
├── routes/
│   └── authRoutes.js          # Routes for login/register
│
├── .env                       # Environment variables
├── package.json               # Project metadata & dependencies
├── server.js                  # App entry point
