import express from "express";
import carValueRouter from "./routes/carValue.js";

const app = express();

app.use(express.json());

// show this
app.use(carValueRouter);

export default app;
