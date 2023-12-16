const { DataTypes } = require("sequelize")

const createCategories = (sequelize) => {
    const Categories = sequelize.define("Categories", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        }, slug: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: "Categories",
        timestamps: false
    })
    return Categories;
}

module.exports = createCategories;