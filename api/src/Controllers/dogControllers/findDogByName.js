const { Dog } = require("../../DataBases/db");
const { Op } = require("sequelize");

const findDogByName = async (name) => {
  return await Dog.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
};

module.exports = findDogByName;
