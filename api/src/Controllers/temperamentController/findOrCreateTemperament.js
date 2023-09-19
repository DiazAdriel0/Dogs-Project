const { Temperament } = require("../../DataBases/db");

const findOrCreateTemperament = async (temperament) => {
  // if the temperament was not found, create new temperament on DB
  await Temperament.findOrCreate({ where: { name: temperament } });
};

module.exports = findOrCreateTemperament;
