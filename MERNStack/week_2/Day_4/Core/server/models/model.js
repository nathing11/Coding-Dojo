// import the mongoose lib
const mongoose = require("mongoose")
// the model 
const UserSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [10, "{PATH} must be at least 10 characters"],
        },
        punchline: {
            type: String,
            required: [true, "{PATH} is required"],
            minLength: [3, "{PATH} must be at least 3 characters"],
        },
    },
    { timestamps: true }
);
const User = mongoose.model('User', UserSchema);
module.exports = User