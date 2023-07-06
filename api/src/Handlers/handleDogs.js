const axios = require('axios')
const { API_KEY } = process.env
const findDog = require('./../Controllers/dogControllers/findDog')
const createDog = require('./../Controllers/dogControllers/createDog')

const URL = `https://api.thedogapi.com/v1/breeds/`

const getDogs = async (req, res) => {
    try {
        const { name } = req.query
        const { data } = await axios(`${URL}?api_key=${API_KEY}`)
        if(name){
            const nameFilter = data.filter(dog => {
                return dog.name.toLowerCase().includes(name.toLowerCase())
            })
            if(nameFilter.length === 0) throw new Error("No se encontró la raza indicada")
            res.status(200).json(nameFilter)
        }else{
            res.status(200).json(data)
        }  
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getDogById = async (req, res) => {
    try {
        const { idRaza } = req.params

        const raza = findDog(idRaza)
        if (raza) {
            res.status(200).json(raza)
        }else{
            const { data } = await axios(`${URL}${idRaza}?api_key=${API_KEY}`)
            res.status(200).json(data)
        } 
    } catch (error) {
            res.status(400).json(error.message)
    }    
}

const postDog = async (req,res) => {
    try {
        const { id, name, image, height, weight, age, temperament } = req.body
        const newDog = {
            id,
            name,
            image,
            height,
            weight,
            age,
            temperament,
        }
        createDog(newDog)
        res.status(200).send("Dog creado con éxito")
    } catch (error){
        res.status(500).json(error.message)
    }
}

module.exports = {
    getDogs,
    getDogById,
    postDog,
}