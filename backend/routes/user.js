const express = require("express");
const z = require("zod")
const {User,Account} = require("../db");
const jwt = require("jsonwebtoken");
const secret = require("../config")
const authMiddleware = require("../middleware")

const router = express.Router();

const signupSchema = z.object({
    username : z.string().email(),
    password: z.string(),
    firstName : z.string(),
    lastName : z.string()
})

router.post("/signup",async (req,res)=>{
    const body = req.body;

    const ans = signupSchema.safeParse(body);

        if(!ans.success){
            return res.status(411).json({
                message : "Invalid Inputs"
            })
        }

    const existingUser = await User.findOne({
        username : body.username

    })

    if(existingUser){
        return req.status(411).json({
            message : "Email already taken."
        })
    }


        const user = await User.create({
            username : body.username,
            password : body.password,
            firstName : body.firstName,
            lastName : body.lastName
        })

        if(!user){
            return res.status(411).json({
                message: "Error"
            })
        }

        const userId = user._id;

        
        const account = await Account.create({
            userId : userId,
            balance : (1+ Math.random()*10000)

        })

        if(!account){
            return res.status(411).json({
                message: "Error"
            })
        }
        


        const token = jwt.sign(userId,secret)

        res.json({
            message : `User created successfully with initial balance of Rs.${account.balance}`,
            token : token
        })

})


const signinSchema = z.object({
    username : z.string().email(),
    password : z.string()
})

router.post("/signin",async (req,res)=>{

    const body = req.body;
    
    signinSchema.safeParse(body);

    if(!signinSchema.success){
        res.status(411).json({
            message : "Incorret inputs"
        })
    }

    const user = User.findOne({
        username : body.username,
        password : body.password
    })

    if(user){
        const token = jwt.sign(user._id,secret);
        res.json({
            token : token
        })
    }else{
        res.status(411).json({
            message : "Error while logging in."
        })
    }
})


const updateSchema = z.object({
    password : z.string().optional(),
    firstName : z.string().optional(),
    lastName : z.string().optional()
})


router.put("/", authMiddleware ,async (req,res)=>{

    const {success} = updateSchema.safeParse(req.body)

    if(!success){
        return req.status(411).json({
            message: "Error while updating information"
        })
    }

    try{

        await User.updateOne({_id:req.userId},req.body)

    }catch(e){
        
        console.log(e)
        return res.status(411).json({})
    }
    
    res.json({
        message: "Updated successfully"
    })


})

router.get("/bulk", authMiddleware ,async (req,res)=>{

    const filter = req.query.filter || "";

    const result = await User.find({
        $or : [ {
            firstName : { "$regex" : filter, "$options": "i" }
        },{
            lastName : { "$regex" : filter, "$options": "i"}
        }]

    })

    res.json({
        users : result.map((user)=>({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })

})

module.exports = {
    router
}

