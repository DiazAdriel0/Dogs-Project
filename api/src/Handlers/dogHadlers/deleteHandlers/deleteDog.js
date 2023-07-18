const deleteDogById = require("./../../../Controllers/dogControllers/deleteDogById");

const deleteDog = async (req, res) => {
  const { idDog } = req.params;
  try {
    const deletedDog = await deleteDogById(idDog);
    if (!deleteDog) throw new Error("Server error, dog could not be deleted");

    res.status(200).json(deletedDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteDog;
