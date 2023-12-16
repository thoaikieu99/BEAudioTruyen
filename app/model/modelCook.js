const { DataTypes } = require("sequelize");

const creatModelCook = (sequelize) => {
    const Cook = sequelize.define(
        "Cook",
        {
            recaudio: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rectile: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            startspeed: {
                type: DataTypes.STRING,
            },
            startime: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

        },
        {
            tableName: "Cooks",
            timestamps: true
        }
    );
    let Audio = sequelize.model('Audio');
    let User = sequelize.model('User');
    Audio.hasMany(Cook, { foreignKey: 'audio_id' });
    User.hasMany(Cook, { foreignKey: 'user_id' });
    return Cook;
}
module.exports = creatModelCook;