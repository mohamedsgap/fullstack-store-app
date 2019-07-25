const express = require('express');

const app = express();

app.use((req, res,next)=>{
    console.log("The request received");
    next();
});

app.use((req, res, next) =>{
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: 'Your request was successfull! '});
    next();
});

app.use((req, res, next)=>{
    console.log("the rquest sent successfully");
});

module.exports = app;