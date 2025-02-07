import JWT_SECRET from './config';

const jwt = require('jsonwebtoken')

 function authMiddleware(req,res,next){

    const authHeader = req.headers.Authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(411).json({});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET);

        if(decoded.userId){
            
            req.userId = decoded.userId;

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

module.exports = {
    authMiddleware
}