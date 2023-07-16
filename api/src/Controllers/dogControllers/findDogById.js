const { Dog, Temperament } = require("../../DataBases/db");

const findDogById = async (idRaza) => {
  try {
    const foundDog = await Dog.findOne({
      where: { id: idRaza },
      include: Temperament,
    });

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
