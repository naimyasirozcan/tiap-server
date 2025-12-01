function handleErrors(app) {

    // *** No Matching URL ***
    app.use((req, res) => {
        res.status(404).json({ errorMessage: "There is no point you can access by this URL." })
    })

    // *** Any Other 
    app.use((error, req, res) => {
        console.log(`Error occured while processing the request.
            METHOD: ${req.method}
            PATH: ${req.path}
            ERROR MESSAGE: ${error}`)

        res.status(500).json({errorMessage: "Internal server error. Check the server console for details"})
    })
}

module.exports = handleErrors