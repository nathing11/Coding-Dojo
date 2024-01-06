// import the mongoose lib
const mongoose = require("mongoose");
const CountrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"{PATH} is required ."],
        minLength:[3,"{PATH} should be at least 3 characters . "]
    }
},{timestamps:true});
const Auther =mongoose.model("Auther",CountrySchema);
module.exports= Auther;