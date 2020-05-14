const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/Issue")

//get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//add new issue
issueRouter.post("/:issueID", (req, res, next) => {
    req.body.issue = req.params.issueID
    const newissue = new Issue(req.body)
    newissue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})