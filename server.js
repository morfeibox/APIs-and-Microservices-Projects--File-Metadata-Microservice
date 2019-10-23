'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
// require and use "multer"...

var app = express();
var upload = multer({dest: __dirname + '/uploads'})
app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});


app.post('/upload', upload.single('upfile'), (req, res, next)=>{
  res.json({ "original_name": req.file.originalname, "size": req.file.size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

