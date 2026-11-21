import request from "supertest";
import app from "../src/app.js";


describe("API 1 - Car Value", () => {
  // show this, test 1
  test("should calculate the car value for a Civic from 2014", async () => {
    // show this
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
      year: 2014,
    });
    // show this
    expect(response.statusCode).toBe(200);
    // show this
    expect(response.body).toEqual({
      car_value: 6614,
    });
  });

  test("should ignore numbers in the model", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "911",
      year: 2020,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      car_value: 2020,
    });
  });

  test("should ignore spaces in the model", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Range Rover",
      year: 2020,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      car_value: 14320,
    });
  });

  test("should return an error for a negative year", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
      year: -987,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error when year is not a number", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
      year: "twenty twenty",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error when model is empty", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "",
      year: 2020,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error when model is missing", async () => {
    const response = await request(app).post("/api/car-value").send({
      year: 2020,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error when year is missing", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error when model is not a string", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: 123,
      year: 2020,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should calculate the value correctly for model ABC", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "ABC",
      year: 2020,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      car_value: 2620,
    });
  });

  test("should calculate the value correctly for model ZZZ", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "ZZZ",
      year: 2020,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      car_value: 9820,
    });
  });

  test("should accept year 0", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
      year: 0,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      car_value: 4600,
    });
  });

  test("should return an error for a decimal year", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
      year: 2020.5,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error for a null model", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: null,
      year: 2020,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });

  test("should return an error for a null year", async () => {
    const response = await request(app).post("/api/car-value").send({
      model: "Civic",
      year: null,
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      error: "there is an error",
    });
  });
});
