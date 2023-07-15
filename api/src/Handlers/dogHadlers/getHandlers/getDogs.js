const axios = require("axios");
const findDogByName = require("../../../Controllers/dogControllers/findDogByName");
const getAllDogs = require("./../../../Controllers/dogControllers/getAllDogs");
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
      const allDataBaseDogs = await getAllDogs();
      const allDogs = [...data, ...allDataBaseDogs];
      allDogs.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      return res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getDogs;
