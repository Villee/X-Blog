var mongoose = require('mongoose');

//申明一个mongoons对象
var BlogSchema = new mongoose.Schema({
    blogId: String,
    title: String,
    content:String,
    createAt:Date,
    lastUpdate:Date
})

//查询的静态方法
BlogSchema.statics = {
    fetch: function(cb) { //查询所有数据
        return this
            .find()
            .sort('createAt') //排序
            .exec(cb) //回调
    },
    findById: function(id, cb) { //根据id查询单条数据
        return this
            .findOne({blogId: id})
            .exec(cb)
    }
}

//暴露出去的方法
module.exports = BlogSchema
