const { Dogs } = require("./../../DataBases/db");

const getAllDogs = async () => {
  try {
    const allDataBaseDogs = await Dogs.findAll();
    return allDataBaseDogs;
  } catch (error) {
    console.error("There are no dogs in database");
    return [];
  }
};

module.exports = getAllDogs;
