const express = require("express")

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to farmers catalog." })
})

require("./server/routes/farmer.routes")(app)

module.exports = app