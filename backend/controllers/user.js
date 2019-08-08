const bcrypt = require('bcrypt');
const User = require('../models/user');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hass)=>{
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save().then(()=>{
            res.status(201).json({
                message: 'Successfully added new User'
            });
        }).catch((error)=>{
            res.status(500).json({
               error: error
            });
        });
    });
};

exports.login = (req, res, next) => {

};