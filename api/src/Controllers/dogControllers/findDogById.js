const { Dog } = require("../../DataBases/db");

const findDogById = async (idRaza) => {
  return await Dog.findOne({ where: { id: idRaza } });
};

module.exports = findDogById;
