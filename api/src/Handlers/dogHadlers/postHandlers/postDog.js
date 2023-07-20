const createDog = require("./../../../Controllers/dogControllers/createDog");

const postDog = async (req, res) => {
  try {
    const {
      name,
      image,
      height,
      weight,
      life_span,
      temperament,
      bred_for,
      breed_group,
      origin,
    } = req.body;

    const newDog = {
      name,
      image,
      height,
      weight,
      life_span,
      bred_for,
      breed_group,
      origin,
    };

    const tempsArray = temperament
      .split(",")
      .map((temperament) => temperament.trim());
    console.log(newDog);
    console.log(tempsArray);
    const createdDog = await createDog(newDog, tempsArray);

    res.status(200).json(createdDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDog;
