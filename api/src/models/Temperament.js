const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Temperament", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNameValid(value) {
          const nameRegex = /^[A-Z][a-zA-Z]*(?:[ -][a-zA-Z]+)*$/;
          if (!nameRegex.test(value)) {
            throw new Error(
              "The 'name' property does not meet the required format"
            );
          }
        },
      },
    },
  });
};
