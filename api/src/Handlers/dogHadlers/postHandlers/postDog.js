const createDog = require("./../../../Controllers/dogControllers/createDog");

const postDog = async (req, res) => {
  try {
    const { id, name, image, height, weight, age, temperament } = req.body;
    const newDog = {
      id,
      name,
      image,
      height,
      weight,
      age,
      temperament,
    };
    const createdDog = await createDog(newDog);
    res.status(200).json(createdDog);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = postDog;
