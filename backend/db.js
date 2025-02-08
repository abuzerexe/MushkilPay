import mongoose  from "mongoose"



await mongoose.connect('mongodb://localhost:27017/MushkilPaisa').then(()=>{
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
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true

    }
})

export const User = mongoose.model("User",UserSchema)
export const Account = mongoose.model("Account",AccountSchema)

