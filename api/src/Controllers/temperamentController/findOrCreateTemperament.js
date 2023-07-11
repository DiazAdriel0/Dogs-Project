const { Temperament } = require("../../DataBases/db");

const findOrCreateTemperament = async (temperament) => {
  await Temperament.findOrCreate({ where: { name: temperament } });
};

module.exports = findOrCreateTemperament;
