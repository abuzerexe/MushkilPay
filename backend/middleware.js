import JWT_SECRET from './config.js';
import jwt from 'jsonwebtoken';



 const authMiddleware = (req,res,next) =>{

    

    const authHeader = req.headers.authorization


    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(411).json({message: "Authorization Failed"});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET);


        if(decoded){
            
            req.userId = decoded.id;
            req.userName = decoded.userName

            next();

        }else{
            return res.status(411).json({
                message : "Error"
            })
        }
        
    }catch(e){
        return res.status(411).json({})
    }

}

export default authMiddleware