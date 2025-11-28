const { Schema, model } = require("mongoose")
const { ORDER_REGEX } = require("../constants/enums")

const orderSchema = new Schema(
    {
        no: {
            type: String,
            required: true,
            unique: true,
            match: ORDER_REGEX,
        },
        receivedAt: {
            type: Date,
            required: true
        },
        completedAt: {
            type: Date,
            default: null
        },
        estimatedDeliveryTime: {
            type: Date,
            default: null
        }

    },
    {
        timestamps: true
    }
)

const Order = model("Order", orderSchema)

module.exports = Order