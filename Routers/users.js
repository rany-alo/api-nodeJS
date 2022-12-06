var express = require('express');
var router = express.Router();

router.post('/login',function(req,res){
    res.status('200')
})

router.post('/register',function(req,res){
    res.status('201')
})

router.get('/',function(req,res){
    res.status('200')
})

router.get('/:id',function(req,res){
    res.status('200')
})

router.get('/me',function(req,res){
    res.status('200')
})

router.put('/me',function(req,res){
    res.status('200')
})

router.put('/:id',function(req,res){
    res.status('200')
})

router.delete('/:id',function(req,res){
    res.status('200')
})

module.exports = router;