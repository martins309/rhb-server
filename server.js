const express = require("express"),
    app = express()


const PORT = process.PORT.env || 8081

app.listen(() => {
    console.log(`the app is running on this port ${PORT}`)
})