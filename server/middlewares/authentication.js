const { verifyToken } = require("../service/authJwt");

const authMiddleware = async (req, res, next) =>{
    try {
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[ 1 ];
        if(!token){
            return res.status(401).json({error:true, message:'Unauthorized'})
        }
        const decoded = await verifyToken(token)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({error:true, message:error.message})
    }
}

module.exports = authMiddleware;