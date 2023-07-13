const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          format(value) {
            // If the string doesn't have the format 'number - number', entering the breed is not allowed.
            if (!/^\d+ - \d+$/.test(value)) {
              throw new Error('The format must be "number - number"');
            }
          },
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          format(value) {
            // If the string doesn't have the format 'number - number', entering the breed is not allowed.
            if (!/^\d+ - \d+$/.test(value)) {
              throw new Error('The format must be "number - number"');
            }
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      // temperament: {
      // type: DataTypes.ENUM(),//Completar con temperaments
      // allowNull: false
      // }
    },
    { timestamps: false }
  );
};
