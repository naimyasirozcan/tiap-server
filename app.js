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
// const indexRouter = require("./routes/index.routes")
// app.use(indexRouter)

// *** Error Handlers ***
const errorHandlers = require("./errors")
errorHandlers(app)

// *** Server Port Definition & HTTP Server Creation ***
const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server active. Listening requests on ${PORT}`)
})

