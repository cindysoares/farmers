const express = require("express")

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to farmers catalog." })
})

const db = require("./server/models")
db.sequelize.sync({ force: true }).then(() => {
  console.log("Recreate db.");
})

require("./server/routes/farmer.routes")(app)

module.exports = app