const { Router } = require("express");
const getDogs = require("./../../Handlers/dogHadlers/getHandlers/getDogs");
const getDogById = require("./../../Handlers/dogHadlers/getHandlers/getDogById");
const postDog = require("./../../Handlers/dogHadlers/postHandlers/postDog");
const updateDog = require("./../../Handlers/dogHadlers/putHandlers/updateDog");

const dogsRouter = Router();

dogsRouter.get("/", getDogs);

dogsRouter.get("/:idDog", getDogById);

dogsRouter.post("/", postDog);

dogsRouter.put("/:idDog", updateDog);

module.exports = dogsRouter;
