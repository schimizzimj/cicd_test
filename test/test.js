const { expect } = require("chai");
const request = require("supertest");
const app = require("../app.js");

describe("GET /", function () {
  it("should respond with sup", function (done) {
    request(app).get("/").expect("sup", done);
  });
});

describe("GET /random", function () {
  it("should respond with a random number betwen 0 and 1", function (done) {
    request(app).get("/random").expect(expectNumber).end(done);

    function expectNumber(res) {
      const value = parseFloat(res.body.value);
      expect(value).is.greaterThanOrEqual(0);
      expect(value).is.lessThanOrEqual(1);
    }
  });
});
