import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Express = express();
const port = 8000;
const mongoUrl = 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Backend is running' });
});

// Start Server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
