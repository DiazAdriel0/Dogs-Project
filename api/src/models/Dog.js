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

      bred_for: {
        type: DataTypes.STRING,
        validate: {
          isBredForValid(value) {
            const bredForRegex = /^.{5,}$/;
            if (value && !bredForRegex.test(value)) {
              throw new Error(
                "The 'bred_for' property does not meet the required format"
              );
            }
          },
        },
      },

      breed_group: {
        type: DataTypes.STRING,
        validate: {
          isBreedGroupValid(value) {
            const breedGroupRegex = /^.{3,}$/;
            if (value && !breedGroupRegex.test(value)) {
              throw new Error(
                "The 'breed_group' property does not meet the required format"
              );
            }
          },
        },
      },

      origin: {
        type: DataTypes.STRING,
        validate: {
          isOriginValid(value) {
            const originRegex = /^[^\d,]+\s*,\s*[^\d,]+$/;
            if (value && !originRegex.test(value)) {
              throw new Error(
                "The 'origin' property does not meet the required format"
              );
            }
          },
        },
      },

      image: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          validateFormat(value) {
            if (!value.url) {
              throw new Error('The "image" object must have "url" property.');
            }

            const imageUrlRegex =
              /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
            if (!imageUrlRegex.test(value.url)) {
              throw new Error(
                "The 'url' property does not meet the required format"
              );
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
        validate: {
          isLifeSpanValid(value) {
            const regex = /^\d+ - \d+$/;
            if (!regex.test(value)) {
              throw new Error(
                "The 'life_span' property does not meet the required format"
              );
            }
          },
        },
      },
    },

    { timestamps: false }
  );
};
