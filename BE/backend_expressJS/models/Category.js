var mongoose=require('mongoose')
var Schema=mongoose.Schema;

const categorySchema=new Schema({
    value:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports=mongoose.model("Category",categorySchema)
