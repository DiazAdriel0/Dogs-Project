const { Dog } = require("../../DataBases/db");

const findDog = async (idRaza) => {
  return await Dog.findOne({ where: { id: Number(idRaza) } });
};

module.exports = findDog;
