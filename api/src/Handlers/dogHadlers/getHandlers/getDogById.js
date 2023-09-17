const axios = require("axios");
const { API_KEY } = process.env;
const findDogById = require("./../../../Controllers/dogControllers/findDogById");

// Dogs API URL
const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDogById = async (req, res) => {
  try {
    const { idDog } = req.params;

    // Find a breed that matches the id passed as a param
    const dog = isNaN(idDog) && (await findDogById(idDog));

    // If the breed is found in DB, it is returned; otherwise, it is searched for in the API
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
