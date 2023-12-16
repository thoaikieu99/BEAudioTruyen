const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

const express = require("express");
const app = express();
app.use(express.json())

const router = require("./routers");
const AppError = require("./ultils/appErrors");
const globalError = require("./controllers/erroeControllers")

app.use("/api/v1", router);

app.get("*", (req, res, next) => {

    next(new AppError(`Can't find ${req.originalUrl} on server! `, 404))
})

app.use(globalError)

const serve = app.listen(3000, () => {
    console.log(`http://localhost:${process.env.PORT}/api/v1`)
})

const { sequelize } = require("./model");

sequelize.sync({ force: false })



process.on("unhandledRejection", err => {
    console.log(err.name, err.message)
    serve.close(() => {
        process.exit(1)
    })
})