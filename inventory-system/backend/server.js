const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API endpoints
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the backend API!" });
});

// Catch-all route to serve React app for any unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
