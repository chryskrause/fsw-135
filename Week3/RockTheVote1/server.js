const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/rock-the-vote",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, () => console.log("Connected to DB"))

app.use("/users", require("./routes/userRouter"))
app.use("/issues", require("./routes/issueRouter"))
app.use("/comments", require("./routes/commentRouter"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(3060, () => {
    console.log("Port 3060 is ready...");
})