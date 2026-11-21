import express from "express";
import carValueRouter from "./routes/carValue.js";

const app = express();

app.use(express.json());

// API homepage
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Car Insurance API",
    status: "Server is running successfully.",
  });
});

// Car Value API routes
app.use(carValueRouter);

export default app;
