const { Temperament } = require("./../../DataBases/db");

const createTemperament = async (temperament) => {
  await Temperament.findOrCreate({ where: { name: temperament } });
};

module.exports = createTemperament;
