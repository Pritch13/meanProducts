const express = require('express');
const router = express.Router();
const Product = require('../models/mProducts');


//Get list of products from DB
router.get('/product', function(req, res, next){
    Product.find().then(function(product){
        res.send(product);
    })
});

//Add a new product to DB
router.post('/product', function(req, res, next){
    Product.create(req.body).then(function(product){
        res.send(product);
    }).catch(next);
});

//Update product in DB
router.put('/product/:id', function(req, res, next){
    Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Product.findOne({_id: req.params.id}).then(function(product){
            res.send(product);
        })

    })
});

//Delete product in DB
router.delete('/product/:id', function(req, res, next){
    Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
        res.send(product);
    })
});

module.exports = router;