
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const indexSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        max: 5000
    },
    description: {
        type: String,
        maxlength: 350
    },
    datePosted: Date
})

module.exports = mongoose.model("Index", indexSchema)

mongoose.connect('mongodb')