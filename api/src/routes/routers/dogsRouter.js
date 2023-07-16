const { Router } = require("express");
const getDogs = require("./../../Handlers/dogHadlers/getHandlers/getDogs");
const getDogById = require("./../../Handlers/dogHadlers/getHandlers/getDogById");
const postDog = require("./../../Handlers/dogHadlers/postHandlers/postDog");

const dogsRouter = Router();

dogsRouter.get("/", getDogs);

dogsRouter.get("/:idDog", getDogById);

dogsRouter.post("/", postDog);

module.exports = dogsRouter;
