const express = require("express")
// const app = express()
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")


//get
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if (err) {
            res.status(500)
            return next
        }
        return res.status(200).send(items)
    })
})

//post
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//delete
inventoryRouter.delete("/:inventoryID", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryID }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.item} from the database!`)
    })
})

//put
inventoryRouter.put("/:inventoryID", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryID}
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



module.exports = inventoryRouter
