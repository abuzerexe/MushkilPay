const mongoose = require('mongoose');

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

const User = mongoose.model("User",UserSchema)

module.exports = {
    User
}