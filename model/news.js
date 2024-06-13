const mongoose=require("mongoose")
const schema= mongoose.Schema({
    "aut":{type:String,required:true},
    "title":String,
    "desc":String,
    "url":String
})
let newsmodel=mongoose.model("news",schema)
module.exports={newsmodel}
