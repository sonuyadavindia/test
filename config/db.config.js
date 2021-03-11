'use strict';
const mysql =require('mysql');
const Dbcon=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bloggerapi'
});
Dbcon.connect(function(err){
    if(err) throw err;
    console.log("databse connected successfully!");
});
module.exports=Dbcon;
