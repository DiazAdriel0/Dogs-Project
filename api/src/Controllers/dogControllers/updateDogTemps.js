const { Dog, Temperament } = require("./../../DataBases/db");

const updateDogTemps = async (id, temperament) => {
  try {
    const foundTempermant = await Temperament.findOne({
      where: { name: temperament },
    });
    if (!foundTempermant) throw new Error("Temperament not found");

    const perro = await Dog.findByPk(id);

    if (!perro) {
      throw new Error("Dog not found");
    }

    const updatedDog = await perro.addTemperament(foundTempermant);
    console.log(updatedDog);

    return updatedDog;
  } catch (error) {
    console.error("Server error, temperaments could not be updated");
    throw error;
  }
};

module.exports = updateDogTemps;
