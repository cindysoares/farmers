const config = require("../config/config.json")['development']

const Sequelize = require("sequelize");
const adminSequelize = new Sequelize('postgres', config.username, config.password, {
    host: config.host,
    dialect: config.dialect
})

const database = config.database;
console.log(`Creating database "${database}"...`);
adminSequelize.query(`CREATE DATABASE "${database}";`).then(() => console.log(`Database "${database}" created.`)).catch(
    err => console.log(`Database "${database}" already exists.`)
);

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