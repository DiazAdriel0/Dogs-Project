const { Dog, Temperament } = require("../../DataBases/db");

const createDog = async (newDog, tempsArray) => {
  const foundTemps = [];

  // tempsArray is something like ['Alert', 'Agile', 'Happy']
  tempsArray.map(async (temp) => {
    const found = await Temperament.findOne({ where: { name: temp } });
    found && foundTemps.push(found);
  });

  const createdDog = await Dog.create(newDog);

  await createdDog.setTemperaments(foundTemps);

  return createdDog;
};

module.exports = createDog;
