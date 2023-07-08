const { Dog } = require("../../DataBases/db");

const createDog = async (newDog) => {
  return await Dog.create(newDog);
};

module.exports = createDog;
