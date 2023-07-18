const { Temperament, DogTemperament } = require("./../../DataBases/db");

const updateDogTemps = async (id, temperament) => {
  try {
    const foundTempermant = await Temperament.findOne({
      where: { name: temperament },
    });

    if (!foundTempermant) throw new Error("Temperament not found");

    const temperamentId = foundTempermant.dataValues.id;

    const updatedDog = await DogTemperament.create({
      DogId: id,
      TemperamentId: temperamentId,
    });

    return updatedDog;
  } catch (error) {
    console.error("Server error, temperaments could not be updated");
    throw error;
  }
};

module.exports = updateDogTemps;
