const mongoose = require("mongoose")

const autherSchema =  new mongoose.Schema({
  
    auther_id : {type: Number , required: true},
    name : {type : String, required : true},
    Ph_num: {type : Number, required : true},
    birth_date : {type : Date, required : true},
    death_date: {type : Date, required : true},
    auther_imgUrl: {type : String, required : true},

})



const AuthModel = mongoose.model("Auther", autherSchema)
module.exports ={
    AuthModel
}