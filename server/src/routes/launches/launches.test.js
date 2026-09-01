const request = require("supertest");
const app = require("../../app");
const { 
  mongoConnect,
  mongoDisconnect
} = require("../../services/mongo");
const { loadPlanetsData } = require("../../models/planets.model.js");

describe("Launches API", () => {

  beforeAll(async () => {
    await mongoConnect();
    await loadPlanetsData();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  describe("Test GET /launches", () => {
    test("It should response with 200 success", async () => {
      const response = await request(app)
        .get("/v1/launches")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("Test POST /launch", () => {
    test("It should response with 200 success", () => {});
    test("It should catch missing require properties", () => {});
    test("It should catch invalid dates", () => {});
  });
});
