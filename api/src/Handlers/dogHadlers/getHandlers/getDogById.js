const axios = require("axios");
const { API_KEY } = process.env;
const findDogById = require("./../../../Controllers/dogControllers/findDogById");

const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDogById = async (req, res) => {
  try {
    const { idRaza } = req.params;

    const raza = await findDogById(idRaza);

    if (raza) {
      res.status(200).json(raza);
    } else {
      const { data } = await axios(`${URL}?api_key=${API_KEY}`);
      const dog = data.find((dog) => dog.id === Number(idRaza));
      res.status(200).json(dog);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getDogById;
