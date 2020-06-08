const express = require("express")
const path = require('path');

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'dist/farmers')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/farmers/index.html'));
});
  
require("./server/routes/farmer.routes")(app)

module.exports = app