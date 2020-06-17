const supertest = require("supertest");
const assert = require('assert');
const app = require("../src/appaux");

describe("Testar usuários", function() {
  it("GET /users", function(done) {
    supertest(app)
      .get("/api/users/")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
  it("POST /users", function(done) {
    let user = {
      name: "Guilherme",
      phone: "11952749790",
      email: "user@email.com"
    }
    supertest(app)
      .post("/api/users/")
      .send(user)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
    });
});