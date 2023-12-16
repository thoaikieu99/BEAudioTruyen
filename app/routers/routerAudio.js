const express = require("express");
const { getAll, getAudio } = require("../controllers/audioControllers");
const audioRouter = express.Router();

audioRouter.get("/", getAll);
audioRouter.get("/:slug", getAudio);



module.exports = audioRouter;

