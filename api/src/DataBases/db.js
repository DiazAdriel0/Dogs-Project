require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Read all the files in the Models folder, require them, and add them to the modelDefiners array.
fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models", file)));
  });
// Inject the connection (sequelize) into all the models
modelDefiners.forEach((model) => model(sequelize));
// Capitalize the name of the models ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Dog, Temperament } = sequelize.models;

// Link the models through the intermiediate table
Dog.belongsToMany(Temperament, { through: "DogTemperament" });
Temperament.belongsToMany(Dog, { through: "DogTemperament" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
