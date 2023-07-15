const { Dog, Temperament } = require("../../DataBases/db");

const createDog = async (newDog, tempsArray) => {
  // [Alert,Agile,Happy]
  const foundTemps = [];
  tempsArray.map(async (temp) => {
    const found = await Temperament.findOne({ where: { name: temp } });
    found && foundTemps.push(found);
  });
  const createdDog = await Dog.create(newDog);
  await createdDog.setTemperaments(foundTemps);
  // const finalDog = await Dog.setTemperaments(foundTemps);
  return createdDog;
};

module.exports = createDog;
