const axios = require("axios");
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDogs = async (req, res) => {
  try {
    const { name } = req.query;
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);

    if (name) {
      const nameFilter = data.filter((dog) => {
        return dog.name.toLowerCase().includes(name.toLowerCase());
      });
      if (nameFilter.length === 0)
        throw new Error("No se encontró la raza indicada");
      return res.status(200).json(nameFilter);
    } else {
      return res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getDogs;
