/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("./../../src//App/app.js");
const { Dog, conn } = require("./../../src/DataBases/db.js");
const assert = require("chai").assert;
const request = require("supertest");

const agent = session(app);
const dog = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Pug",
  image: { url: "https://asdasdasdjhakjshda" },
  weight: { imperial: "4 - 5", metric: "4 - 5" },
  height: { imperial: "4 - 5", metric: "4 - 5" },
  life_span: "8 - 10",
  temperament: "Agile, Alert",
  bred_for: "Anything",
  breed_group: "Anything",
  origin: "Anything, Anything",
};

describe("Dog routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
  describe("GET /dogs", () => {
    it("should get 200", () => agent.get("/dogs").expect(200));
  });
});

describe("GET /dogs with query name=Affenpinscher", () => {
  it("Debería retornar con status 200 un objeto con la propiedad name", (done) => {
    request(app)
      .get("/dogs?name=affenpinscher")
      .end((err, res) => {
        assert.equal(res.status, 200, "El código de estado HTTP no es 200");

        assert.isObject(res.body[0], "La respuesta no es un objeto");
        assert.property(
          res.body[0],
          "name",
          "El objeto no tiene la propiedad esperada"
        );

        done();
      });
  });
  it("Debería retornar con status 400 un objeto con la propiedad error", (done) => {
    request(app)
      .get("/dogs?name=affenpinscherInvalidQueryToSearchBreed")
      .end((err, res) => {
        assert.equal(res.status, 400, "El código de estado HTTP no es 400");

        assert.isObject(res.body, "La respuesta no es un objeto");
        assert.property(
          res.body,
          "error",
          "El objeto no tiene la propiedad esperada"
        );

        done();
      });
  });
});

describe("GET /dogs with params :idDog", () => {
  it("Debería retornar con status 200 un objeto con la propiedad name", (done) => {
    request(app)
      .get("/dogs/1")
      .end((err, res) => {
        assert.equal(res.status, 200, "El código de estado HTTP no es 200");

        assert.isObject(res.body, "La respuesta no es un objeto");
        assert.property(
          res.body,
          "name",
          "El objeto no tiene la propiedad esperada"
        );

        done();
      });
  });
  it("Debería retornar con status 400 un objeto con la propiedad error", (done) => {
    request(app)
      .get("/dogs/invalidIdForSearchBreedById")
      .end((err, res) => {
        assert.equal(res.status, 400, "El código de estado HTTP no es 400");

        assert.isObject(res.body, "La respuesta no es un objeto");
        assert.property(
          res.body,
          "error",
          "El objeto no tiene la propiedad esperada"
        );

        done();
      });
  });
});

describe("POST /dogs", () => {
  it("Debería retornar con status 200 un objeto con las propiedades name, image, weight, height, life_span, bred_for, breed_group y origin", (done) => {
    request(app)
      .post("/dogs")
      .send(dog)
      .end((err, res) => {
        assert.equal(res.status, 200, "El código de estado HTTP no es 200");

        assert.isObject(res.body, "La respuesta no es un objeto");
        assert.property(
          res.body,
          "name",
          "El objeto no tiene la propiedad name"
        );
        assert.property(
          res.body,
          "image",
          "El objeto no tiene la propiedad image"
        );
        assert.property(
          res.body,
          "weight",
          "El objeto no tiene la propiedad weight"
        );
        assert.property(
          res.body,
          "height",
          "El objeto no tiene la propiedad height"
        );
        assert.property(
          res.body,
          "life_span",
          "El objeto no tiene la propiedad life_span"
        );
        assert.property(
          res.body,
          "bred_for",
          "El objeto no tiene la propiedad bred_for"
        );
        assert.property(
          res.body,
          "breed_group",
          "El objeto no tiene la propiedad breed_group"
        );
        assert.property(
          res.body,
          "origin",
          "El objeto no tiene la propiedad origin"
        );

        done();
      });
  });
  it("Debería retornar con status 400 un objeto con la propiedad error", (done) => {
    request(app)
      .post("/dogs")
      .send({})
      .end((err, res) => {
        assert.equal(res.status, 400, "El código de estado HTTP no es 400");

        assert.isObject(res.body, "La respuesta no es un objeto");
        assert.property(
          res.body,
          "error",
          "El objeto no tiene la propiedad esperada"
        );

        done();
      });
  });
});
