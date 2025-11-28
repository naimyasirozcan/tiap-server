const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json({message: "Server received a request"})
})

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)

