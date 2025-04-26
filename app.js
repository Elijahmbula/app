const express = require('express');
const app = express();

// Set the port to use Render's port, or 3000 for local testing
const port = process.env.PORT || 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
