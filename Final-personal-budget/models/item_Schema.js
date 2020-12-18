const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: [true, "Id already in use"]
    },
    label: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    value: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        min: [6, 'Hex Color too Short (at least 6 digits)']
    },

}, { collection: 'Items'})

module.exports = mongoose.model('Item', itemSchema)
