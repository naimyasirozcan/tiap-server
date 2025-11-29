const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)
.then((dbResponse) => {
    const dbName = dbResponse.connections[0].name
    console.log(`Connected to database, name: ${dbName}`)
})
.catch((error) => {
    console.log(`A problem occurred while connecting to database. Error: ${error}`)
})

// *** Models ***
require("../models/Order.model")
require("../models/SKU.model")
require("../models/Task.model")
require("../models/TaskCollection.model")
require("../models/Location.model")
require("../models/RootCause.model")
require("../models/Employee.model")
require("../models/Exception.model")