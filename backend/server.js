import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Oneness Festival API Server is running...');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is healthy' });
});

// Placeholder route for inquiries (Contact/Accommodation)
app.post('/api/inquiry', (req, res) => {
  const { type, fullName, email, phone, details } = req.body;
  console.log(`Received ${type} inquiry from ${fullName} (${email})`);
  
  // In a real application, you would save this to a database (MongoDB, PostgreSQL, etc.)
  res.status(201).json({
    success: true,
    message: 'Inquiry received successfully!',
    data: { fullName, email }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
