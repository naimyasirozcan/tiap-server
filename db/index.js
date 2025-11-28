const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)
.then((dbResponse) => {
    const dbName = dbResponse.connections[0].name
    console.log(`Connected to database, name: ${dbName}`)
})
.catch((error) => {
    console.log(`A problem occurred while connecting to database. Error: ${error}`)
})