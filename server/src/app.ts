import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/api/v1/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "StudySync AI Server is running 🚀",
    timestamp: new Date().toISOString(),
  });
});

export default app;