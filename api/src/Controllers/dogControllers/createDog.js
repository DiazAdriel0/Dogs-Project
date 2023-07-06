const { Dog } = require('../../DataBases/db')

const createDog = async (newDog) => {
    await Dog.create(newDog)
}

module.exports = createDog