'use strict';
const Dbcon = require("../../config/db.config");

//category object created
var Category = function(category){
    this.CategoryName = category.CategoryName;
    this.CatSlug = category.CatSlug;
    this.slug = category.slug;
    this.Description = category.Description;
    this.created_at = new Date();
    this.updated_at = new Date();
}
Category.findAll = function(result){
    Dbcon.query('select * from categories',function(err,res){
        if(err){
            console.log('error:',err);
            result(null,err);
        }else{
           // console.log('category',res);
            result(null,res);
        }
    });
};
Category.create=function(newCat,result){
    Dbcon.query('insert into categories set ?',newCat,function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res.insertId);
        }
    });
};
Category.findById = function(id,result){
    Dbcon.query('select * from categories where id =?',id,function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    })
}
Category.update=function( id, updCat, result){
    Dbcon.query('update categories set ? where id = ?',[updCat,id],function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    });
};
Category.delete = function(id,result){
    Dbcon.query('delete from categories where id = ?',id,function(err,res){
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    });
};
module.exports= Category;