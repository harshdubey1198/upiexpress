const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Signup route
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Validate user input here

  // Set user data in a cookie
  res.cookie('userData', JSON.stringify({ name, email }));

  res.status(201).send('User registered successfully');
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate user input here

  // Check if user data exists in the cookie
  const userData = req.cookies.userData;
  if (!userData) {
    res.status(401).send('Invalid email or password');
    return;
  }

  const { name, email: storedEmail } = JSON.parse(userData);

  // Verify email and password
  if (storedEmail !== email || storedPassword !== password) {
    res.status(401).send('Invalid email or password');
    return;
  }

  // Set user data in a cookie
  res.cookie('userData', JSON.stringify({ name, email }));

  res.status(200).send('Login successful');
});

// Logout route
app.post('/logout', (req, res) => {
  // Clear the user data from the cookie
  res.clearCookie('userData');

  res.status(200).send('Logout successful');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
