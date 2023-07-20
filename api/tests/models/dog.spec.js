const { Dog, Temperament, conn } = require("./../../src/DataBases/db.js");
const { assert } = require("chai");
const chai = require("chai");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

describe("Dog model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Dog.sync({ force: false }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Dog.create({ name: "Pug" });
      });
    });
  });
  const newDog = {
    name: "Firulais",
    image: {
      url: "https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg",
    },
    weight: { imperial: "4 - 5", metric: "4 - 5" },
    height: { imperial: "4 - 5", metric: "4 - 5" },
    life_span: "8 - 10",
    temperament: "Agile, Alert",
    bred_for: "Guard dog",
    breed_group: "Working",
    origin: "Anywhere, USA",
  };
  it("Should create a new dog in the database", async () => {
    const createdDog = await Dog.create(newDog);

    assert.isNotNull(createdDog.id, "The created dog must have an ID");
    assert.equal(createdDog.name, newDog.name, "The dog's name does not match");
    assert.equal(
      createdDog.bred_for,
      newDog.bred_for,
      "The dog's bred_for does not match"
    );
    assert.equal(
      createdDog.breed_group,
      newDog.breed_group,
      "The dog's breed_group does not match"
    );
    assert.equal(
      createdDog.origin,
      newDog.origin,
      "The dog's origin does not match"
    );
    assert.equal(
      createdDog.image.url,
      newDog.image.url,
      "The 'url' property of the dog's image object does not match"
    );
    assert.equal(
      createdDog.weight.imperial,
      newDog.weight.imperial,
      "The 'imperial' property of the dog's weight object does not match"
    );
    assert.equal(
      createdDog.weight.metric,
      newDog.weight.metric,
      "The 'metric' property of the dog's weight object does not match"
    );
    assert.equal(
      createdDog.height.imperial,
      newDog.height.imperial,
      "The 'imperial' property of the dog's height object does not match"
    );
    assert.equal(
      createdDog.height.metric,
      newDog.height.metric,
      "The 'metric' property of the dog's height object does not match"
    );
  });

  after(async () => {
    await Dog.destroy({ where: { name: newDog.name } });
  });

  describe("Temperament Model Test", () => {
    const newTemperament = {
      name: "Brave",
    };
    it("Should create a new temperament in the database", async () => {
      const createdTemperament = await Temperament.create(newTemperament);

      assert.isNotNull(
        createdTemperament.id,
        "The created temperament must have an ID"
      );
      assert.equal(
        createdTemperament.name,
        newTemperament.name,
        "The temperament's name does not match"
      );
    });
    after(async () => {
      await Temperament.destroy({ where: { name: newTemperament.name } });
    });
  });
});
