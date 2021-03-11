'use strict';
const Dbcon = require('../../config/db.config');
var Blog = function(blog){
    this.PostTitle = blog.PostTitle;
    this.slug = blog.slug;
    // this.CategoryId = blog.CategoryId;
    // this.SubCategoryId = blog.SubCategoryId;
    // this.PostBy = blog.PostBy;
    // this.PostImage = blog.PostImage;
    // this.Is_Active = blog.Is_Active;
    // this.meta_keywords = blog.meta_keywords;
    this.created_at = new Date();
    this.updated_at = new Date();
}
Blog.findAll= function(result){
    Dbcon.query('select * from posts',function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    });
};
Blog.create = function(blog,result){
    console.log(blog);
        Dbcon.query('insert into posts set ?',blog,function(err,res){
            if(err){
                result(null,err);
            }else{
                result(null,res);
            }
        });
}
Blog.findById = function(id,result){
    Dbcon.query('select * from posts where id = ?',+id,function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    });
}
Blog.update = function(id,updBlog,result){
    Dbcon.query('update posts set ? where id = ?',[updBlog,id],function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    });
}
Blog.delete = function(id,result){
    Dbcon.query('delete from posts where id = ? ',id,function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    });
}
module.exports = Blog;
