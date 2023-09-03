const {Router} = require("express");
const bookController =  Router();


const {BookModel} = require("../models/bookModel");

bookController.get("/", async(req, res)=>{
    const book = await BookModel.find()
    req.send(book)
})

bookController.post("/create",async(req, res)=>{
    const {book_id, title ,auther_id, publisher, P_date,category, price, old_count, book_imgUrl} = req.body;
     
    const bookk = new BookModel({
        book_id, title , auther_id,publisher, P_date, category, price, old_count, book_imgUrl
    })
    try{
        await bookk.save()
        res.send("book created")
    }
    catch(err){
         res.send("something wrong")
    }
    
})

module.exports = {
    bookController
}