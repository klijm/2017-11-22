const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/user',require('./user/changeUser'));
app.use('/www',express.static('www'));

mongoose.connect('mongodb://127.0.0.1:27022/test',{ autoIndex: false })
.then(function(error){
    if(error){
        console.log('失败');
        return;
    }
    app.listen(80);
    console.log('数据库链接成功');
});


