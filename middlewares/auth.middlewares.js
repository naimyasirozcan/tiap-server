const jwt = require("jsonwebtoken")

// *** Verify Logged In User
function verifyToken(req, res, next){
    
    console.log(req.headers)
    
    try {
        const authToken = req.headers.authorization.split(" ")[1]
        const payload = jwt.verify(authToken, process.env.TOKEN_SECRET)
        console.log("PAYLOAD: ", payload)
        req.payload = payload
        next()
    }catch(error){
        res.status(401).json({errorMessage: "TOKEN IS NOT VALID!!!"})
    }
}

// *** Verify Admin
function verifyAdmin(req, res, next){

    console.log(req.headers)

    try {
        const authToken = req.headers.authorization.split(" ")[1]
        const payload = jwt.verify(authToken, process.env.TOKEN_SECRET)
        console.log("PAYLOAD: ", payload)
        req.payload = payload
        if(payload.role !== "admin" || payload.role !== "superAdmin"){
            res.status(401).json({errorMessage: "You have no authorization to see this page."})
            return
        } else if(payload.role === "admin" || payload.role === "superAdmin"){
            next()
        } else {
            console.log("Unknown error while verifying admin.")
            return
        }
    } catch(error){
        res.status(401).json({errorMessage: "TOKEN IS NOT VALID!!!"})
    }

}

module.exports = { verifyToken, verifyAdmin }