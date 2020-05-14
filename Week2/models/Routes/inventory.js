const express = require("express")
// const app = express()
const mongoose = require("mongoose")
const inventory = express.Router()
const Index = require("../index")

// const items = [
//     {item: "Laptop", price: 1100},
//     {item: "headset", price: 40}
// ]


//get
inventory.get("/", (req, res, next) => {
    Index.find((err, items) => {
        if (err) {
            res.status(500)
            return next
        }
        return res.status(200).send(items)
    })
})

//post
// const newIndex = new Index(req.body)

// newIndex.save(err => {
//     if(err) return res.status(500).send(err);
//     return res.status(200).send(newIndex)
// })

//delete
inventory.delete("/:indexID", (req, res, next) => {
    Index.findOneAndDelete({_id: req.params.indexID}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.item} from the database!`)
    })
})

//put
inventory.put("/:indexID", (req, res, next) => {
    Index.findOneAndUpdate(
        {_id: req.params.IndexID}
        (req.body),
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next (err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})



module.exports = inventory




