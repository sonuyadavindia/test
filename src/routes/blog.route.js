'use strict';
const express = require('express');
const route= express.Router();
const BlogController = require('../controllers/blog.Controller');
route.get('/',BlogController.findAll);
route.post('/create',BlogController.create);
route.get('/edit/:id',BlogController.findById);
route.put('/update/:id',BlogController.update);
route.delete('/delete/:id',BlogController.delete);

module.exports = route;