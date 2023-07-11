const axios = require("axios");
const findDogByName = require("../../../Controllers/dogControllers/findDogByName");
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDogs = async (req, res) => {
  try {
    const { name } = req.query;
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);

    if (name) {
      const nameFilteredApi = data.filter((dog) => {
        return dog.name.toLowerCase().includes(name.toLowerCase());
      });
      const nameFilteredDB = await findDogByName(name);
      if (!nameFilteredApi.length && !nameFilteredDB.length)
        throw new Error(`No breed matching with ${name} search was found`);
      const foundDogs = [...nameFilteredApi, ...nameFilteredDB];
      return res.status(200).json(foundDogs);
    } else {
      return res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getDogs;
