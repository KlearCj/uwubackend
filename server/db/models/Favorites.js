const db = require("..")
const S= require("sequelize")

class Favorites extends S.Model{}

Favorites.init({
 name: { type: S.STRING}
}, { sequelize: db, modelName: "favorites"})

module.exports= Favorites