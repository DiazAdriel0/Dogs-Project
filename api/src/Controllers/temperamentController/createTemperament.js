const { Temperament } = require('./../../DataBases/db')

const createTemperament = async (temperament) => {
    await Temperament.findOrCreate({ where: { temperament } })
}

module.exports = createTemperament