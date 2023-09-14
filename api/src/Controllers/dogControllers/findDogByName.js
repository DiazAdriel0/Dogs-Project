const { Dog } = require("../../DataBases/db");
const { Op } = require("sequelize");

// Find the breeds that contain the name provided in the query
const findDogByName = async (name) => {
  return await Dog.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
};

module.exports = findDogByName;
