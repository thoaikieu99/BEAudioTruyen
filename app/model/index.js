const { Sequelize } = require("sequelize");
const createAudio = require("./modelAudio");
const createCategories = require("./modelCategories");
const creatModelUser = require("./modelUser");
const creatModelCook = require("./modelCook");
const creatModeluseraudio = require("./modelUseraudio");

const sequelize = new Sequelize(process.env.DB, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    host: process.env.HOST_DATABASE, dialect: process.env.DIALECT_DATABASE, timezone: process.env.TIMEZONE
})
const Categorie = createCategories(sequelize);
const Audio = createAudio(sequelize);
const User = creatModelUser(sequelize)
const Cook = creatModelCook(sequelize);
const useraudio = creatModeluseraudio(sequelize);
module.exports = { sequelize, Audio, Categorie, User, Cook, useraudio }
