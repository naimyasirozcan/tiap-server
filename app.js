try {
    process.loadEnvFile()
} catch(error){
    console.warn(`${error}, .env not found. Local enviroment values will be used.`)
}

// *** Database Connection ***
const express = require("express")
const app = express()

// *** Config (Requests will pass through these middlewares) ***
const config = require("./config")
config(app)

// Endpoints/Routes:
const indexRouter = require(express.Router)