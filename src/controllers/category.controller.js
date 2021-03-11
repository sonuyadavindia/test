'use strict';
const Category = require('../models/category.model');

exports.findAll= function(req,res){
    Category.findAll(function(err,category){
        if(err){
            res.send(err);
        }else{
             res.json(category);
        }
    });
};
exports.create= function(req,res){
    const newCat= new Category(req.body);
   
    Category.create(newCat,function(err,category){
        if(err){
            res.send(err);
            }else{
                res.json({error:false,message:'Category Created Successfully!'});
            }
     });
};
exports.findById = function(req,res){
    Category.findById(req.params.id,function(err,category){
        if(err){
            res.json({error:true,message:err});
        }else{
           res.json(category);
        }
    });
};
exports.update =function(req,res){
    //const updCat = new Category(req.body);
    Category.update(req.params.id,new Category(req.body),
    function(err,category){
        if(err){
            req.send(err);
        }else{
            res.json({error:false,message:'category update Successfully!'});
        }
    });
};
exports.file = function(req,res){
    res.send(req.body);
    console.log(req.body);
};
exports.delete = function(req,res){
    Category.delete(req.params.id,function(err,category){
        if(err){
            req.json({error:true,message:err});
        }else{
            res.json({error:false,message:'Category Deleted Successfully!'});
        }
    });
};