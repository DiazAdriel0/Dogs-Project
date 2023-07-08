const axios = require("axios");
const { API_KEY } = process.env;

const URL = `https://api.thedogapi.com/v1/breeds/`;

const getDogs = async (req, res) => {
  try {
    const { name, filter } = req.query;
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);

    // If it receives a filter query
    if (filter) {
      const filters = filter.split(",");
      const filteredDogs = [];

      data.forEach((dog) => {
        let check = false;

        if (dog.temperament) {
          for (let i = 0; i < filters.length; i++) {
            const filter = filters[i];
            if (dog.temperament.includes(filter)) {
              check = true;
            } else {
              check = false;
              break;
            }
          }
        }

        if (check) filteredDogs.push(dog);
      });
      console.log(filteredDogs);
      if (!filteredDogs.length)
        throw new Error(
          "No se encontraron resultados con el filtro especificado"
        );
      return res.status(200).json(filteredDogs);
    }
    // Else if it receives a name query
    else if (name) {
      const nameFilter = data.filter((dog) => {
        return dog.name.toLowerCase().includes(name.toLowerCase());
      });
      if (nameFilter.length === 0)
        throw new Error("No se encontró la raza indicada");
      return res.status(200).json(nameFilter);
    }
    // Else return all dogs
    else {
      return res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = getDogs;
