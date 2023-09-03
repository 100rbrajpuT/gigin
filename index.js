const express = require("express")
const app = express();
const { bookController} = require("./routes/book.router")
const { autherController} = require("./routes/auther.routes")
require("dotenv").config()

const {connection} = require("./configs/db")
app.use(express.json())

const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.send("home")
})

app.use("/books", bookController);

app.use("/authers", autherController)




app.listen(PORT ,async(req, res)=>{
    try{
        await connection;
        console.log("connected to database")
    }
    catch(e){
        console.log("error in connection", e)
    }
    console.log(`connected to port ${PORT}`)
})