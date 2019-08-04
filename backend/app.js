// MONGODB PW: un0xlqfbTxUVH7In
// MONGODB CONNECTION: mongodb+srv://mohamed:<password>@cluster0-fytzm.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');


const app = express();
/*
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
*/


mongoose.connect('mongodb+srv://mohamed:un0xlqfbTxUVH7In@cluster0-fytzm.mongodb.net/test?retryWrites=true&w=majority').then(() => {
    console.log("'Successfully connected to MongoDB Atlas!'");
}).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
}); 

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    thing.save().then(()=> {
        res.status(201).json({
            message: 'Post saved successfully!'
        });
    }).catch((error)=>{
        res.status(400).json({
            error: error
        });
    });
});

app.use('/api/stuff',(req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: '',
            price: 4900,
            userId: 'qsomihvqios',
          },
          {
            _id: 'oeihfzeomoihi',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: '',
            price: 2900,
            userId: 'qsomihvqios',
          },
    ];

    res.status(200).json(stuff);
});


module.exports = app;