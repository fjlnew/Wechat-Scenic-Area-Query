const express = require('express')
const app =express();
var mysql = require('./mysql')

app.get('/',function(req,res){
    res.send('132');
})
app.get('/login',function(req,res){
    var peoplename = req.query.name;
    var passworld = req.query.password;
    var sql = `SELECT * FROM login WHERE peoplename = '${peoplename}' AND passworld =  '${passworld}'`;
    mysql(sql).then(data=>{
        if(Array.prototype.isPrototypeOf(data) && data.length === 0){
            return res.status(200).json({
                err_code:1,
                message:'账号或者密码错误!'
            })
        }else{
            return res.status(200).json({
                err_code:0,
                message:'登录成功！'
            })
        }
    }).catch(err=>{
        return res.status(200).json({
            err_code:2,
            message:'服务器出错！'
        })
    })
})

app.get('/zhuce',function(req,res){
    var name = req.query.name;
    var password = req.query.password;
    var sql =`INSERT INTO login VALUES ('${name}','${password}')`;
    mysql(sql).then(data=>{
        return res.status(200).json({
            err_code:1,
            message:'注册成功！'
        })
    }).catch(err=>{
        return res.status(200).json({
            err_code:500,
            message:err.message
        })
    })
})
app.get('/select',function(req,res){
    var placename = req.query.placename;
    var sql = `SELECT * FROM introduction WHERE xxname LIKE '%${placename}%'`;
    mysql(sql).then(data=>{
        return res.status(200).json({
            data:data,
        })
    }).catch(err=>{
        return res.status(200).json({
            data:err.message,
        })
    })
})


app.get('/zhuye',function(req,res){
    var nowplace = req.query.nowplace;
    var sql = `SELECT * FROM placepic WHERE place = '${nowplace}'`;
    var sql1 = `SELECT * FROM showbox WHERE place = '${nowplace}' LIMIT 0, 5;`;
    var sql2 = `SELECT * FROM showbox WHERE place = '${nowplace}' LIMIT 5, 10;`;
    var sql3 = `SELECT * FROM introduction WHERE place = '${nowplace}'`
    mysql(sql).then(data=>{
        mysql(sql1).then(data1=>{
            mysql(sql2).then(data2=>{
                mysql(sql3).then(data3=>{
                    return res.status(200).json({
                        data:data,
                        data1:data1,
                        data2:data2,
                        data3:data3
                    })
                }).catch(err=>{
                    return res.status(200).json({
                        data:err.message,
                    })
                })
            }).catch(err=>{
                return res.status(200).json({
                    data:err.message,
                })
            })
        }).catch(err=>{
            return res.status(200).json({
                data:err.message,
            })
        })
    }).catch(err=>{
        return res.status(200).json({
            data:err.message,
        })
    })
})

app.listen(3000,function(){
    console.log('running............');
})