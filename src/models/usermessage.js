const mongoose =require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique: [true, "email already used"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid EmailID")
            }
        }
    },

    phone: {
        type: Number,
        required:[true, "please enter a phone number"],
        minLength:10
    },

    message: {
        type: String,
        required:true,
    },

})


// creating the collection

const User = mongoose.model("User",userSchema);

module.exports = User;