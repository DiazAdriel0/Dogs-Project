const { Router } = require('express')
const { getTemperaments } = require('../../Handlers/handleTemperaments')

const temperamentsRouter = Router()

temperamentsRouter.get('/', getTemperaments)

module.exports = temperamentsRouter