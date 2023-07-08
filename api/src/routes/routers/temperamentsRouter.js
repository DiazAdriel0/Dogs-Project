const { Router } = require("express");
const getTemperaments = require("./../../Handlers/temperamentHandlers/getTemperaments");

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperaments);

module.exports = temperamentsRouter;
