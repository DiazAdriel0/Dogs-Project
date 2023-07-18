const updateDogTemps = require("./../../../Controllers/dogControllers/updateDogTemps");

const updateDog = async (req, res) => {
  try {
    const { temperament } = req.body;
    const { idDog } = req.params;

    const updatedDog = await updateDogTemps(idDog, temperament);

    if (!Object.keys(updatedDog).length)
      throw new Error(
        "Server error, dog could not be connected with the temperament"
      );

    res.status(200).json(updatedDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateDog;
