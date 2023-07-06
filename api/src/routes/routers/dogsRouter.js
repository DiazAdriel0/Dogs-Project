const { Router } = require('express')
const { getDogs, getDogById, postDog } = require('../../Handlers/handleDogs')

const dogsRouter = Router();

dogsRouter.get('/', getDogs);

dogsRouter.get('/:idRaza', getDogById);

dogsRouter.post('/', postDog)

module.exports = dogsRouter;
