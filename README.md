# Product Vault

## Tech Stack

- Frontend: React 19, TailwindCSS
- Backend: NodeJS, ExpressJS, MongoDB
- Database:  MongoDB

## Features

- Products: Create and view products in real-time.
- Form Handling: Validating and Processing User Input Effectively.
- Notifications: Toast Notifications to user on success and error.
- Optimistic UI: Instant feedback for user actions without page reload.
- Performance Optimization: MongoDB indexes on key fields like name ensure fast and efficient data retrieval.
- Responsive Layout: Fully optimized for desktop and mobile devices.

## Installation & Setup

1. Clone the repository:
   <pre>git clone https://github.com/moeedrafi/mern-practical-task.git
   cd mern-practical-task</pre>
2. Install dependencies:
   <pre>cd frontend npm install</pre>
   <pre>cd backend npm install</pre>
3. Set up environment variables in both frontend and backend (create a .env file):
   <pre>PORT=8000
      MONGODB_URL=mongodb_url
      CORS_ORIGIN=*
      NODE_ENV=development
   VITE_API_URL=http://localhost:8000</pre>
4. Run both frontend and backend: 
   <pre>npm run dev</pre>
