const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    post: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)