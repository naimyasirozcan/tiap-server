const express = require("express")
const logger = require("morgan")
const cors = require("cors")

function config(app){
    app.use(logger("dev")) //
    app.use(cors({origin: process.env.ORIGIN}))
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
}

module.exports = config