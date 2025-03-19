const loggerMiddleware =(req,res,next) =>{
    console.log(`[$new DATE().toISOString()}]${req.method} ${req.url}`);
    next();
};

module.exports = loggerMiddleware; 