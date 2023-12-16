const express = require("express");
const audioRouter = require("./routerAudio");
const userRouter = require("./routerUser");
const router = express.Router();

router.use("/audios", audioRouter);
router.use("/users", userRouter);
module.exports = router;