const { Dog, Temperament } = require("./../../DataBases/db");

const getAllDogs = async () => {
  try {
    // get all database dogs
    const allDataBaseDogs = await Dog.findAll({
      include: Temperament,
    });

    // normalize dog's Temperaments array
    const dogsWithTemperaments = allDataBaseDogs.map((dog) => {
      const temperamentsArray = dog.Temperaments.map(
        (temperament) => temperament.name
      );

      return {
        ...dog.dataValues,
        temperament: temperamentsArray.join(", "),
      };
    });

    return dogsWithTemperaments;
  } catch (error) {
    console.error("There are no dogs in database");
    return [];
  }
};

module.exports = getAllDogs;
