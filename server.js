const express = require("express")
require('dotenv').config()

const PORT = process.env.PORT || 8081
app = express()

app.listen(PORT, () => {
    console.log(`the app is running on this port ${PORT}`)
})


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))