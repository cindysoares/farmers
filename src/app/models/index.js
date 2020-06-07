const config = require("../config/config.json")['development'];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.username, config.password, config)

const database = "farmerscatalog";
console.log(`Creating database "${database}"...`);
sequelize.query(`CREATE DATABASE "${database}";`).then(() => console.log(`Database "${database}" created.`)).catch(
    err => console.log(`Database "${database}" already exists.`)
);

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.address = require("./address.model.js") (sequelize, Sequelize)
db.document = require("./document.model.js") (sequelize, Sequelize)
db.farmers = require("./farmer.model.js") (sequelize, Sequelize)

module.exports = db