const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/public', (req,res)=>{
    res.send({message : 'Welcome to the public api!'});
}); 

//protected route 

router.get('/protected', authMiddleware, (req,res)=>{
    res.send({message: 'Welcome to the Protect API!'})
}); 
router.get('/error', (req, res,next)=>{
    const error = new Error('Soemthing went wrong!');
    next(error);
})
module.exports=router;