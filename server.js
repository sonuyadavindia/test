const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//express app
const multer = require('multer');
const app=express();
app.use(cors());
const port=process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    // to support URL-encoded bodies
let upload  = multer({ storage: multer.memoryStorage() }); 
app.post('/', upload.single('img'), (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send();
});

app.post('/single', upload.single('img'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send();
});

const categoryRoute=require('./src/routes/category.route');
const blogRoute = require('./src/routes/blog.route');
//using as middleware
    app.use('/api/v1/category',categoryRoute);
    app.use('/api/v1/blog',blogRoute);
    
app.listen(port,()=>{
    console.log(`server running on the Port: ${port}`);
});