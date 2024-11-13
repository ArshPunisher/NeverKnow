const { verifyToken } = require("../service/authJwt");

const authMiddleware = async (req, res, next) =>{
    try {
        const token = req.cookies?.token;
        if(!token){
            return res.status(401).json({error:true, message:'Authentication token missing'})
        }
        const decoded = await verifyToken(token)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({error:true, message:error.message})
    }
}

module.exports = authMiddleware;