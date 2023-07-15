const { Dog, Temperament } = require("./../../DataBases/db");

const getAllDogs = async () => {
  try {
    const allDataBaseDogs = await Dog.findAll({
      include: Temperament,
    });
    const dogsWithTemperaments = allDataBaseDogs.map((dog) => {
      const temperamentsArray = dog.Temperaments.map(
        (temperament) => temperament.name
      );
      return {
        ...dog.dataValues,
        temperament: temperamentsArray.join(", "),
      };
    });

    console.log(dogsWithTemperaments);

    return dogsWithTemperaments;
  } catch (error) {
    console.error("There are no dogs in database");
    return [];
  }
};

module.exports = getAllDogs;
