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
      bred_for: {
        type: DataTypes.STRING,
      },
      breed_group: {
        type: DataTypes.STRING,
      },
      origin: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          validateFormat(value) {
            if (!value.url) {
              throw new Error('The "image" object must have "url" property.');
            }
          },
        },
      },
      height: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          validateFormat(value) {
            if (!value.imperial || !value.metric) {
              throw new Error(
                'The "height" object must have "imperial" and "metric" properties.'
              );
            }

            // If the string doesn't have the format 'number - number', entering the breed is not allowed.
            const regex = /^\d+ - \d+$/;
            if (!regex.test(value.imperial) || !regex.test(value.metric)) {
              throw new Error(
                'The format of the "imperial" and "metric" properties must be "number - number"'
              );
            }
          },
        },
      },
      weight: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          validateFormat(value) {
            if (!value.imperial || !value.metric) {
              throw new Error(
                'The "weight" object must have "imperial" and "metric" properties.'
              );
            }

            // If the string doesn't have the format 'number - number', entering the breed is not allowed.
            const regex = /^\d+ - \d+$/;
            if (!regex.test(value.imperial) || !regex.test(value.metric)) {
              throw new Error(
                'The format of the "imperial" and "metric" properties must be "number - number"'
              );
            }
          },
        },
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
