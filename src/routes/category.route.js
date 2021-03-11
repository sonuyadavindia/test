'use strict';
const express=require('express');
const router=express.Router();
const categoryController =require('../controllers/category.controller');
const multer = require('multer');
const upload=multer({
    dest:'images'
})
//retrive all Category
router.get('/',categoryController.findAll);
router.post('/create',categoryController.create);
router.get('/update/:id',categoryController.findById);
router.put('/update/:id',categoryController.update);
router.post('/file',upload.single('img'),categoryController.file);
router.delete('/delete/:id',categoryController.delete);

module.exports =router;