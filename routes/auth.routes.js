const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { verifyToken, verifyAdmin } = require("../middlewares/auth.middlewares.js")
const { PASSWORD_REGEX } = require("../constants/enums.js")
const Employee = require("../models/Employee.model")

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

    if (!name || !department || !title || !email || !password) {
        res.status(400).json({ errorMessage: "Please fill all mandatory fields." })
        return
    }
    if (!PASSWORD_REGEX.test(password)) {
        res.status(400).json({ errorMessage: "Password is not strong enough, choose a stronger one." })
        return
    }

    try {
        const foundUser = await Employee.findOne({ email: email })
        console.log("found user: ", foundUser)

        if (foundUser) {
            console.log("Client tried to create a new user/employee with the existing email address!")
            res.status(400).json({ errorMessage: "Email already exist! Use an another address." })
            return
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newEmployee = {
            ...req.body,
            password: hashPassword
        }

        await Employee.create(newEmployee)

        console.log("New user signed up!: ", newEmployee.name)
        res.status(201).json({ errorMessage: "New user signed up!: " })

    } catch (error) {
        next(error)
    }


})

// *** Log In ***
router.post("/login", async (req, res, next) => {

    console.log(req.body)

    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ errorMessage: "Email and password needed." })
        return
    }

    try {

        const employee = await Employee.findOne({ email: email })

        if (!employee) {
            res.status(400).json({ errorMessage: 'User not found.' })
            console.log("Login attempt with non existing email.")
            return
        }

        const isPassworMatch = await bcrypt.compare(password, employee.password)

        console.log(isPassworMatch)

        if (!isPassworMatch) {
            res.status(401).json({ errorMessage: "Wrong password!!!" })
        }

        const payload = {
            role: employee.role,
            email: employee.email,
            id: employee.id
        }

        console.log("Payload used to create token: ", payload)

        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, { algorithm: "HS256", expiresIn: "7d" })

        res.status(200).json({ message: "Token created successfully.", authToken: authToken })

    } catch (error) {
        next(error)
    }
})

// *** Verification Test ***
router.get("/verify", verifyToken, (req, res) => {
    res.status(200).send("User authorized.")
})



module.exports = router
