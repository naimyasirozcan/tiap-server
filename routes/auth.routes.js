const User = require("../models/Employee.model")
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const verifyToken = require("../middlewares/auth.middlewares.js")

// *** Test ***
router.get("/", (req, res, next) => {
    console.log("all is good.")
    res.send("all is good.")
    next()
})

// *** Sign Up ***
router.post("/signup", async (req, res, next) => {

    console.log(req.body)

    const { name, department, title, email, password } = req.body

    if(!name ||!department||!title || !email ||!password ){
        res.status(400).json({errorMessage: "Please fill all mandatory fields."})
        return
    }


})

module.exports = router
