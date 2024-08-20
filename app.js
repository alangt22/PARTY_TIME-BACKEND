const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

//db connection
const conn = require("./db/conn.js")

conn();
const PORT = process.env.PORT || 3000;

//routes
const routes = require("./routes/router.js")

app.use("/api", routes)

app.listen(PORT, function() {
    console.log("Servidor Online!!")
})


module.exports = app;


