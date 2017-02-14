/**
 * Created by Wangfei on 2017/2/14.
 */
var express = require('express');
var mongoose = require('mongoose');//导入mongoose模块

var Blog = require('../models/blog');//导入模型数据模块

var router = express.Router();
var idCreater = 1;

//新增加一片博客
router.post('/', function (req, res) {
    var now = new Date().getTime();
    var blog = new Blog({
        blogId: req.body.blogId,
        title: req.body.title,
        content: req.body.content,
        createAt: now,
        lastUpdate: now,
        readCount: 0,
        author: 'X-Codder'
    });
    blog.save();
    console.log('新增一条blog记录!');
    //res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
    res.json(JSON.stringify(blog));
})

router.get('/', function (req, res) {
    var limit = parseInt(req.query.limit) || 10;
    var sortby = req.query.sortby || 'createAt';
    var order = req.query.order || 'desc';
    console.log(JSON.stringify(req.query));
    Blog.find({}).sort('-createAt').limit(limit).exec(function (err, blogs) {
        res.json(blogs);
    })
})

module.exports = router;