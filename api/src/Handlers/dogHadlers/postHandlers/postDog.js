const createDog = require("./../../../Controllers/dogControllers/createDog");

const postDog = async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperament } = req.body;
    const tempsArray = temperament
      .split(",")
      .map((temperament) => temperament.trim());
    const newDog = {
      name,
      image,
      height,
      weight,
      life_span,
    };
    const createdDog = await createDog(newDog, tempsArray);
    console.log(createDog.temperaments);
    res.status(200).json(createdDog);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = postDog;
