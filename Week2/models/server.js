const express = require("express")
const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/inventory",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => console.log("Connected to DB"))

// app.get("/", (req, res) => {
//     res.send("Waiting for MongoDB")
// })

app.use("/", require("./Routes/inventory"))
app.use("/", require("./index"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
  })

app.listen(6050, () => {
    console.log("Server is waiting on port 6000")
})