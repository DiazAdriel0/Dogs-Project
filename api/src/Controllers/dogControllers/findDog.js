const { Dog } = require('../../DataBases/db');

const findDog = async (idRaza) => {
    return await Dog.findOne({ where: { id: idRaza }});
}

module.exports = findDog