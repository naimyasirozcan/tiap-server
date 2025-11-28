const { Schema, model } = require("mongoose")
const { TASK_COLLECTION_REGEX, TASK_TYPES, ZONES } = require("../constants/enums")

const taskCollectionSchema = new Schema(
    {
        no: {
            type: String,
            required: true,
            unique: true,
            match: TASK_COLLECTION_REGEX,
        },
        order: {
            type: Schema.Types.ObjectId,
            ref: "Order",
            required: true
        },
        type: {
            type: String,
            required: true,
            enum: TASK_TYPES
        },
        zone: {
            type: String,
            required: true,
            enum: ZONES            
        },
        employee: {
            type: Schema.Types.ObjectId,
            ref: "Employee",
            required: true
        },
        assignedAt: {
            type: Date,
            default: null
        },
        startedAt: {
            type: Date,
            default: null
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

const TaskCollection = model("TaskCollection", taskCollectionSchema)

module.exports = TaskCollection