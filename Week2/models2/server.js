const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/store', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => console.log("Connected to the db"))

app.use("/store", require("./routes/inventoryRouter"))

app.listen(4040, () => {
    console.log("Port 4040 is running.")
})