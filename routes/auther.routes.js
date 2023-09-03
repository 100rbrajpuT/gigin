const {Router} = require("express");
const autherController =  Router();


const {AuthModel} = require("../models/autherModel");

autherController.get("/", async(req, res)=>{
    const auther = await AuthModel.find()
    req.send(auther)
})

autherController.post("/create",async(req, res)=>{
    const {auther_id, name,Ph_num, birth_date, death_date,auther_imgUrl} = req.body;
     
    const autherr = new AuthModel({
        auther_id, name, Ph_num,birth_date, death_date, auther_imgUrl
    })
    try{
        await autherr.save()
        res.send("auther created")
    }
    catch(err){
         res.send("something wrong")
    }
    
})

module.exports = {
    autherController
}