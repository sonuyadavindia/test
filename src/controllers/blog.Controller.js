'use strict';
const Blog =require('../models/blog.model');
exports.findAll= function(req,res){
    
    Blog.findAll(function(err,blog){
        if(err){
            res.send(err);
        }else{
            if(blog.length==0){
                res.json({status:'error',message:'sorry! No Data Found!'});
            }else{
                res.json(blog);
            }
        }
    });
}
exports.create = function(req,res){
    const newblog = new Blog(req.body);
    Blog.create(newblog,function(err,blog){
        if(err){
            res.json({status:'error',message:err});
        }else{
            res.json({status:'sucess',message:'Blog Created Successfully!'});
        }
    });
}
exports.findById = function(req,res){
    Blog.findById(req.params.id,function(err,blog){
        if(err){
            res.send(err);
        }else{
                if(blog.length==0){
                     res.json({status:'error',message:'sorry! No Data Found!'});
                }else{
                res.json(blog);
                }
            }
    });
}
exports.update= function(req,res){
    Blog.update(req.params.id,new Blog(req.body),function(err,blog){
        if(err){
            res.json({status:'error',message:err});
        }else{
            res.json({status:'success',message:blog});
        }
    });
}
exports.delete = function(req,res){
    Blog.delete(req.params.id,function(err,blog){
        if(err){
            res.json({status:'error',message:err});
        }else{
            if(blog.affectedRows==0){
                res.json({status:'error',message:'sorry! No Data Found!'});
           }else{
                res.json({status:'success',message:'Blog Deleted Successfully!'});
           }
        }
    });
}