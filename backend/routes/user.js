import express from "express"
import z from "zod"
import jwt from "jsonwebtoken"
import secret from "../config.js"
import authMiddleware from "../middleware.js"
import {User,Account} from "../db.js"

 const router = express.Router();


const signupSchema = z.object({
    username : z.string().email().min(3),
    password: z.string().min(5),
    firstName : z.string().min(3),
    lastName : z.string().min(3)
})

router.post("/signup",async (req,res)=>{
    const body = req.body;

    const ans = signupSchema.safeParse(body);

        if(!ans.success){
            return res.status(411).json({
                message : "Invalid Inputs. Try Again."
            })
        }

    const existingUser = await User.findOne({
        username : body.username

    })

    if(existingUser){
        return res.status(411).json({
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
                message: "Error occured. Try Again."
            })
        }

        const userId = user._id;

        
        const account = await Account.create({
            userId : userId,
            balance : (1+ Math.random()*10000)

        })

        if(!account){
            return res.status(411).json({
                message: "Error occured. Try Again."
            })
        }
        


        const token = jwt.sign({ id: userId.toString() },secret)

        res.json({
            message : `Account Created successfully. `,
            token : token
        })

})


const signinSchema = z.object({
    username : z.string().email(),
    password : z.string()
})

router.post("/signin",async (req,res)=>{

    const body = req.body;
    
    const parsedResult = signinSchema.safeParse(body);

    if(!parsedResult.success){
        return res.status(411).json({
            message : "Incorret inputs. Try again"
        })
    }

    const user = await User.findOne({
        username : body.username,
        password : body.password
    })

    if(user){
        const token = jwt.sign({ id: user._id.toString() },secret);
        return res.json({
            name : user.firstName,
            token : token
        })
    }else{
        return res.status(411).json({
            message : "Incorrect Email or Password. Try Again"
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
        return res.status(411).json({message: "Error while updating information"})
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


export default router;
