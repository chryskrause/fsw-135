const express = require("express")
const userRouter = express.Router()
const User = require("../models/User")

//get all users
userRouter.get("/", (req, res, next) => {
    User.find((err, users) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//get one user


//add a new user
userRouter.post("/", (req, res, next) => {
    const newUser = new user(req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})

//update user
userRouter.put("/:userId", (req, res, next) =>{
    User.findOneAndUpdate(
        { _id: req.params.movieId },
        req.body,
        {new: true},
        (err, updatedUser) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updatedUser)
        }
    )
})

//delete user
userRouter.delete("/:userID", (req, res, next) => {
    User.findOneAndDelete({_id: req.params.userID},
        (err, deletedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedUser.name} from the database.`)
        })
})

module.exports = userRouter