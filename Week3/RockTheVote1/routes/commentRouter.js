const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/Comment")

//get all comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

//add new comment
commentRouter.post("/:commentID", (req, res, next) => {
    req.body.comment = req.params.commentID
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})