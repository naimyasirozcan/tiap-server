const { Schema, model } = require("mongoose")
const { TASK_REGEX } = require("../constants/enums")

const taskSchema = new Schema(
    {
        no: {
            type: String,
            required: true,
            unique: true,
            match: TASK_REGEX,
        },
        taskCollection: {
            type: Schema.Types.ObjectId,
            ref: "TaskCollection",
            required: true,
        },
        sku: {
            type: Schema.Types.ObjectId,
            ref: "SKU",
            required: true
        },
        location: {
            type: Schema.Types.ObjectId,
            ref: "Location",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
        startedAt: {
            type: Date,
            required: true
        },
        completedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)

const Task = model("Task", taskSchema)

module.exports = Task