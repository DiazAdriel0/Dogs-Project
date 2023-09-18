const createDog = require("./../../../Controllers/dogControllers/createDog");

const postDog = async (req, res) => {
  try {
    // extract properties of body
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

    // instance object to create new dog on DB
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

    // normalize temperament property
    const tempsArray = await temperament
      .split(",")
      .map((temperament) => temperament.trim());

    // create new dog
    const createdDog = await createDog(newDog, tempsArray);

    res.status(200).json(createdDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDog;
