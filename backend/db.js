const mongoose = require('mongoose');
const { Schema } = require('zod');

await mongoose.connect('mongodb://localhost:27017/MehngaPaisa').then(()=>{
    console.log("Database Connected")
})

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },
    lastName : {
        type : String,
        required : true,
        trim : true ,
        maxLength : 50
    }
})

const AccountSchema = new mongoose.Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true

    }
})

const User = mongoose.model("User",UserSchema)
const Account = mongoose.model("Account",AccountSchema)

module.exports = {
    User,
    Account
}