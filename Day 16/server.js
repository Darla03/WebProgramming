//import modules
const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const apiRoutes = require('./routes/api');

const app = express();
const PORT =3000;

//apply middleware...
app.use(express.json());
app.use(loggerMiddleware);

//mount routes
app.use('/api',apiRoutes)

//error handling 
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send({error:'Internal Server Error'});
});

//statt server 
app.listen(PORT, ()=>{
    console.log(`Sever running on http:
    //localhost:${PORT}`);
});