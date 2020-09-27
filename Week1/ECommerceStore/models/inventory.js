const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
    itemName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Store", storeSchema)