const mongoose = require("mongoose")

const bookSchema =  new mongoose.Schema({
    book_id: {type: Number, required : true},
    title : {type : String, required : true},
    auther_id : {type: Number , required: true},
    publisher : {type : String, required : true},
    P_date: {type : Date, required : true},
    category : {type : String, required : true},
    price : {type : Number, required : true},
    sold_count: {type : Number, required : true},
    book_imgUrl: {type : String, required : true},

})

const BookModel = mongoose.model("Book", bookSchema)
module.exports ={
    BookModel
}