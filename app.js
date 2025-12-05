try {
    process.loadEnvFile()
} catch(error){
    console.warn(`.env not found. Local enviroment values will be used.`)
}
//require("dotenv").config()

// *** Database ***
require("./db")

// *** Create Server ***
const express = require("express")
const app = express()

// *** Config (Requests will pass through these middlewares) ***
const config = require("./config")
config(app)

// *** API Intro Page ***
app.get("/", async (req, res, next) => {
    try{
        res.status(200).send("You've connected to the api.")
    } catch (error) {
        console.log(error)
    }
})

// *** Routes ***
const indexRouter = require("./routes/index.routes")
app.use("/api", indexRouter)

// *** Error Handlers ***
const errorHandlers = require("./errors")
errorHandlers(app)

// *** Server Port Definition & HTTP Server Creation ***
const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server active. Listening requests on ${PORT}`)
})