import express from "express"
import mongoose from "mongoose"
import authMiddleware from "../middleware.js"
import { Account } from "../db.js"
// const { default: mongoose } = require("mongoose");

 const router = express.Router();

router.get("/balance", authMiddleware,async(req,res)=>{
    const userId = req.userId;
    const account = await Account.findOne({
        userId 
    })

    res.json({
        balance : account.balance
    })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const { amount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userId
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    try{
        const toAccount = await Account.findOne({
            userId: to
        });
    
        if (!toAccount) {
            return res.status(400).json({
                message: "Invalid account"
            })
        }

    }catch(e){
        
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});

// this approach keeps the concept of transactions in mind, require repel set 

// router.post("/transfer",authMiddleware,async(req,res)=>{

//     try{
//         const session = mongoose.startSession();
//         (await session).startTransaction();
    
//         const {to, amount } = req.body;
    
//         const account = await Account.findOne({
//             userId : req.userId
//         }).session(session)
    
//         if(!account || amount > account.balance){
//             (await session).abortTransaction();
//             return res.status(400).json({
//                 message : "Insufficient Balance."
//             })
//         }
        
        
//         const toAccount = await Account.findOne({
//             userId : to
//         }).session(session)
        
        
//         if(!toAccount){
//             (await session).abortTransaction();
//             return res.status(400).json({
//                 message : "Invalid account"
//             })
//         }
    
//         await Account.updateOne({
//             userId : req.body
//         },{
//             $inc : { balance : -amount}
//         }).session(session)
    
//         await Account.updateOne({userId : to},
//             {$inc : {balance : amount}}
//         ).session(session)
    
//         (await session).commitTransaction();
    
//         res.json({
//             message : "Transfer successful."
//         })
//     }catch(e){
//         console.log(e)
//         res.status(411).json({
//             message : "Error" + e
//         })
//     }
    
// })



export default router;
