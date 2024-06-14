import express from "express";
import mongoose from 'mongoose';
import userRoutes from "./routes/userRoutes";
import env from "dotenv";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// env
env.config();

// Routes
app.use('/api', userRoutes);

// MongoDB Connection
const mongoUsername = process.env.MONGO_USERNAME
const mongoPassword = process.env.MONGO_PASSWORD
const server= process.env.MONGO_SERVER;
const port= process.env.MONGO_PORT;
mongoose.connect(`mongodb://${mongoUsername}:${mongoPassword}@${server}:${port}`)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });