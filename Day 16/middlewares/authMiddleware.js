const authMiddleware = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(token === 'secret123'){
        next(); // proceed 
    } else {
        res.status(401).send({error: 'Unauthorizd Access'})
    }
};

module.exports = authMiddleware;

