const { Dog } = require("./../../DataBases/db");

const deleteDogById = async (id) => {
  try {
    // Delete dog by id
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
