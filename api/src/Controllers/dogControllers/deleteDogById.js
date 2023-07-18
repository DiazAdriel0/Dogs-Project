const { Dog } = require("./../../DataBases/db");

const deleteDogById = async (id) => {
  try {
    return await Dog.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = deleteDogById;
