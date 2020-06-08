const config = require("../config/config.json")['development']

const Sequelize = require("sequelize")
const sequelize = new Sequelize(config.database, config.username, config.password, config)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.address = require("./address.model.js") (sequelize, Sequelize)
db.document = require("./document.model.js") (sequelize, Sequelize)
db.farmer = require("./farmer.model.js") (sequelize, Sequelize)

db.farmer.hasOne(db.address, {
    as: "address",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
db.address.belongsTo(db.farmer, {
    foreignKey: "farmerId",
    as: "farmer",
})

db.farmer.hasOne(db.document, {
    as: "document",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
db.document.belongsTo(db.farmer, {
    foreignKey: "farmerId",
    as: "farmer"
})

module.exports = db