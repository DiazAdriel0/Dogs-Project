const { Dog, Temperament } = require("./../../DataBases/db");

const updateDogTemps = async (id, temperament) => {
  try {
    const foundTempermant = await Temperament.findOne({
      where: { name: temperament },
    });
    if (!foundTempermant) throw new Error("Temperament not found");

    const dog = await Dog.findByPk(id);

    if (!dog) throw new Error("Dog not found");

    const updatedDog = await dog.addTemperament(foundTempermant);

    if (!updatedDog) throw new Error("Repeated temperaments cannot be added");

    return updatedDog;
  } catch (error) {
    console.error("Server error, temperaments could not be updated");
    throw error;
  }
};

module.exports = updateDogTemps;
