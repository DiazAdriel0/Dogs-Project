const { Dog, Temperament } = require("./../../DataBases/db");

const updateDogTemps = async (id, temperament) => {
  try {
    // Find the temperament that matches with name received
    const foundTempermant = await Temperament.findOne({
      where: { name: temperament },
    });

    if (!foundTempermant) throw new Error("Temperament not found");

    // Find the breed that matches with the id received
    const dog = await Dog.findByPk(id);

    if (!dog) throw new Error("Dog not found");

    // Link the breed with the temperament through the intermediate table
    const updatedDog = await dog.addTemperament(foundTempermant);

    if (!updatedDog) throw new Error("Repeated temperaments cannot be added");

    return updatedDog;
  } catch (error) {
    console.error("Server error, temperaments could not be updated");
    throw error;
  }
};

module.exports = updateDogTemps;
