const axios = require('axios')
const { API_KEY } = process.env
const createTemperament = require('./../Controllers/temperamentController/createTemperament')

const URL = `https://api.thedogapi.com/v1/breeds/`

const getTemperaments = async (req, res) => {
    try {
        const { data } = await axios(`${URL}?api_key=${API_KEY}`)
        let temperaments = []
        data.forEach( dog => {
            if(dog.temperament) {
                const dogTemp = dog.temperament?.split(",")
                temperaments.push(...dogTemp)
            }
        });
        const temperamentSet = new Set(temperaments)
        const temperamentsArray = Array.from(temperamentSet).map(temperament => temperament.trim())
        temperamentsArray.forEach(temperament => {
            createTemperament(temperament)
        })
        res.status(200).json(temperamentsArray)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { getTemperaments }