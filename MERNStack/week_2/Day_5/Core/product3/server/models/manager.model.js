// import the mongoose lib
const mongoose = require("mongoose");
const CountrySchema = new mongoose.Schema({
Title:{
    type:String,
    required:[true,"{PATH} is required"],
    minLength: [3, "{PATH} must be at least 3 characters"],
},

Price:{
    type:Number,
    required:[true ,"{PATH} is required"],
    minLength: [3, "{PATH} must be at least 3 characters"],

},
Description:{
    type:String,
    required:[true ,"{PATH} is required"],
    minLength: [3, "{PATH} must be at least 3 characters"],
},


},{timestamps:true});
const Country =mongoose.model("Country",CountrySchema);
module.exports= Country;