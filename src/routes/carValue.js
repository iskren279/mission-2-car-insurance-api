import express from "express";
import calculateCarValue from "../services/carValue.js";

const router = express.Router();

// show this
router.post("/api/car-value", (req, res) => {
  // show this
  const { model, year } = req.body;

  try {
    const carValue = calculateCarValue(model, year);

    // show this
    res.status(200).json({
      car_value: carValue,
    });
    // show this
  } catch (error) {
    res.status(400).json({
      error: "there is an error",
    });
  }
});

export default router;
