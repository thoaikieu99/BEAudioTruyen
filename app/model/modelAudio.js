const { DataTypes } = require("sequelize")

const createAudio = (sequelize) => {
    const Audio = sequelize.define("Audio", {
        date: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        modified: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
        },
        trang_thai: {
            type: DataTypes.STRING(100),
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        sotap: {
            type: DataTypes.INTEGER
        },
        baseurl: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        tableName: "Audios",
        timestamps: false
    });
    return Audio;
}

module.exports = createAudio;