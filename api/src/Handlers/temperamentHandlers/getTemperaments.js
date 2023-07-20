const axios = require("axios");
const { API_KEY } = process.env;
const findOrCreateTemperament = require("../../Controllers/temperamentController/findOrCreateTemperament");

const URL = `https://api.thedogapi.com/v1/breeds/`;

const getTemperaments = async (req, res) => {
  try {
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);
    let temperaments = [];
    data.forEach((dog) => {
      if (dog.temperament) {
        const dogTemp = dog.temperament
          ?.split(",")
          .map((temperament) => temperament.trim());
        temperaments.push(...dogTemp);
      }
    });
    const temperamentSet = new Set(temperaments);
    const temperamentsArray = Array.from(temperamentSet);
    temperamentsArray.forEach(async (temperament) => {
      await findOrCreateTemperament(temperament);
    });
    res.status(200).json(temperamentsArray);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTemperaments;
