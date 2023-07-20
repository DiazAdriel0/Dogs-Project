/* eslint-disable import/no-extraneous-dependencies */
const { assert } = require("chai");
const session = require("supertest-session");
const app = require("./../../src//App/app.js");
const { Dog, conn } = require("./../../src/DataBases/db.js");
const request = require("supertest");

const agent = session(app);
const dog = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  name: "Pug",
  image: {
    url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg",
  },
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
  beforeEach(() => Dog.sync({ force: false }).then(() => Dog.create(dog)));
  describe("GET /dogs", () => {
    it("should get 200", () => agent.get("/dogs").expect(200));
  });
});

describe("GET /dogs with query name=Affenpinscher", () => {
  it("It should return with status 200 an object with the 'name' property", (done) => {
    request(app)
      .get("/dogs?name=affenpinscher")
      .end((err, res) => {
        assert.equal(res.status, 200, "The HTTP status code is not 200");

        assert.isObject(res.body[0], "The response is not a object");
        assert.property(
          res.body[0],
          "name",
          "The object does not have the expected property"
        );

        done();
      });
  });
  it("It should return with status 400 an object with the 'error' property", (done) => {
    request(app)
      .get("/dogs?name=affenpinscherInvalidQueryToSearchBreed")
      .end((err, res) => {
        assert.equal(res.status, 400, "The HTTP status code is not 400");

        assert.isObject(res.body, "The response is not a object");
        assert.property(
          res.body,
          "error",
          "The object does not have the expected property"
        );

        done();
      });
  });
});

describe("GET /dogs with params :idDog", () => {
  it("It should return with status 200 an object with the 'name' property", (done) => {
    request(app)
      .get("/dogs/1")
      .end((err, res) => {
        assert.equal(res.status, 200, "The HTTP status code is not 200");

        assert.isObject(res.body, "The response is not a object");
        assert.property(
          res.body,
          "name",
          "The object does not have the expected property"
        );

        done();
      });
  });
  it("It should return with status 400 an object with the 'error' property", (done) => {
    request(app)
      .get("/dogs/invalidIdForSearchBreedById")
      .end((err, res) => {
        assert.equal(res.status, 400, "The HTTP status code is not 400");

        assert.isObject(res.body, "The response is not a object");
        assert.property(
          res.body,
          "error",
          "The object does not have the expected property"
        );

        done();
      });
  });
});

describe("POST /dogs", () => {
  it("The response should return with status 200 an object with the properties name, image, weight, height, life_span, bred_for, breed_group, and origin", (done) => {
    const newDog = {
      name: "New Pug",
      image: {
        url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg",
      },
      weight: { imperial: "4 - 5", metric: "4 - 5" },
      height: { imperial: "4 - 5", metric: "4 - 5" },
      life_span: "8 - 10",
      temperament: "Agile, Alert",
      bred_for: "Anything",
      breed_group: "Anything",
      origin: "Anything, Anything",
    };
    request(app)
      .post("/dogs")
      .send(newDog)
      .end((err, res) => {
        assert.equal(res.status, 200, "The HTTP status code is not 200");

        assert.isObject(res.body, "The response is not a object");
        assert.property(
          res.body,
          "name",
          "The object does not have the property 'name'"
        );
        assert.property(
          res.body,
          "image",
          "The object does not have the property 'image'"
        );
        assert.property(
          res.body,
          "weight",
          "The object does not have the property 'weight'"
        );
        assert.property(
          res.body,
          "height",
          "The object does not have the property 'height'"
        );
        assert.property(
          res.body,
          "life_span",
          "The object does not have the property 'life_span'"
        );
        assert.property(
          res.body,
          "bred_for",
          "The object does not have the property 'bred_for'"
        );
        assert.property(
          res.body,
          "breed_group",
          "The object does not have the property 'breed_group'"
        );
        assert.property(
          res.body,
          "origin",
          "The object does not have the property 'origin'"
        );

        done();
      });
    after(async () => {
      await Dog.destroy({ where: { name: newDog.name } });
    });
  });

  it("It should return with status 400 an object with the 'error' property", (done) => {
    request(app)
      .post("/dogs")
      .send({})
      .end((err, res) => {
        assert.equal(res.status, 400, "The HTTP status code is not 400");

        assert.isObject(res.body, "The response is not a object");
        assert.property(
          res.body,
          "error",
          "The object does not have the expected property"
        );

        done();
      });
  });
});

describe("GET /temperaments", () => {
  it("should get 200", () => agent.get("/temperaments").expect(200));
});

after(async () => {
  await Dog.destroy({ where: { name: dog.name } });
});
