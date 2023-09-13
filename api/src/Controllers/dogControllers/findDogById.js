const { Dog, Temperament } = require("../../DataBases/db");

const findDogById = async (idRaza) => {
  try {
    // Find the dog that matches the received ID
    const foundDog = await Dog.findOne({
      where: { id: idRaza },
      include: Temperament,
    });
    // Normalize the Temperaments property to match the API property
    const temperaments = foundDog.Temperaments?.map(
      (temperament) => temperament.dataValues?.name
    ).join(", ");

    const returnedDog = {
      ...foundDog.dataValues,
      temperament: temperaments,
    };

    return returnedDog;
  } catch (error) {
    return null;
  }
};

module.exports = findDogById;
