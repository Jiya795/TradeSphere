TradeSphere is a full-stack stock trading platform that I built to learn how a real broking product works end to end. It is inspired by Zerodha and has two parts: a public landing website and a trading dashboard, both connected to a Node.js backend and a MongoDB database.


I started this project to get hands-on with the MERN stack, and it ended up teaching me a lot about routing, REST APIs, state management and deployment.
Live Demo
Website: https://tradesphere-1-zc5s.onrender.com
dashboard: https://tradesphere-dashboard-yb0e.onrender.com


Landing website
Home, About, Products, Pricing and Support pages, all built as separate React components
Client-side routing with React Router
Fully responsive layout using Bootstrap
Signup page for new users


Trading dashboard
Summary, Holdings, Positions, Orders and Funds sections
Watchlist with buy and sell actions
Data fetched from my own REST API and stored in MongoDB


Backend
REST API built with Express
MongoDB models for holdings, positions and orders using Mongoose


Tech stack
Frontend: React, React Router, Bootstrap, Axios
Dashboard: React, Chart.js, Material UI
Backend: Node.js, Express
Database: MongoDB Atlas, Mongoose
Deployment: Render


Project structure
TradeSphere/
├── frontend/      
├── dashboard/     
└── backend/       
