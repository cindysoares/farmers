const express = require("express")
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to farmers catalog." });
  });
  
const port = process.env.PORT || '8080';

app.listen(port, () => console.log(`API running on localhost:${port}`));