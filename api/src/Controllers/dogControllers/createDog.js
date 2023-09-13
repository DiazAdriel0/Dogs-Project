const { Dog, Temperament } = require("../../DataBases/db");

const createDog = async (newDog, tempsArray) => {
  const foundTemps = [];

  // tempsArray is something like ['Alert', 'Agile', 'Happy']
  tempsArray.map(async (temp) => {
    const found = await Temperament.findOne({ where: { name: temp } });
    found && foundTemps.push(found);
  });

  // Create new dog
  const createdDog = await Dog.create(newDog);

  // Link dogs to temperaments through the intermediate table.
  await createdDog.setTemperaments(foundTemps);

  return createdDog;
};

module.exports = createDog;
