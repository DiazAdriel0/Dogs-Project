const axios = require("axios");
const { API_KEY } = process.env;
const findDogById = require("./../../../Controllers/dogControllers/findDogById");

const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDogById = async (req, res) => {
  try {
    const { idDog } = req.params;

    const dog = isNaN(idDog) && (await findDogById(idDog));

    if (dog) {
      res.status(200).json(dog);
    } else {
      const { data } = await axios(`${URL}?api_key=${API_KEY}`);
      const dog = data.find((dog) => dog.id === Number(idDog));
      if (!dog) throw new Error("No breed matches the searched id");
      res.status(200).json(dog);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogById;
