// src/index.ts
import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("Frost Backend is running 🚀");
});

// TODO: Mount your routes here
// Example:
// import authRoutes from "./routes/auth.routes";
// app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Frost Server running on port ${PORT}`);
});
