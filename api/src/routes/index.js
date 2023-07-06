const { Router } = require('express');
const dogsRouter = require('./routers/dogsRouter')
const temperamentsRouter = require('./routers/temperamentsRouter')

const router = Router();

router.use('/dogs', dogsRouter)

router.use('/temperaments', temperamentsRouter)

module.exports = router;
