try {
    process.loadEnvFile()
} catch(error){
    console.warn(`${error}, .env not found. Local enviroment values will be used.`)
}

// *** Database Connection ***
require("./db")

// *** Create Server ***
const express = require("express")
const app = express()

// *** Config (Requests will pass through these middlewares) ***
const config = require("./config")
config(app)

// *** Routes ***
app.get("/", async (req, res) => {
    try{
        const exceptions = await TaskCollection.find({})
        res.status(200).json(exceptions)
    } catch (error) {
        console.log(error)
    }
})
// const indexRouter = require("./routes/index.routes")
// app.use(indexRouter)

// *** Error Handlers ***
const errorHandlers = require("./errors")
const Employee = require("./models/Employee.model")
const Location = require("./models/Location.model")
const SKU = require("./models/SKU.model")
const Task = require("./models/Task.model")
const TaskCollection = require("./models/TaskCollection.model")
const Exception = require("./models/Exception.model")
errorHandlers(app)

// *** Server Port Definition & HTTP Server Creation ***
const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server active. Listening requests on ${PORT}`)
})

