const { Dog } = require("../../DataBases/db");

const findDogById = async (idRaza) => {
  return await Dog.findOne({ where: { id: Number(idRaza) } });
};

module.exports = findDogById;
