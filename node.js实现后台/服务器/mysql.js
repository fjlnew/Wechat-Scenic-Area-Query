var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'weixinxiaocx'
})
connection.connect();



var query = function (sql) {
    return new Promise((resolve, rejcet) => {

        connection.query(sql,function (error, results, fields) {
            if (error){
                rejcet(error);
               
            }
            resolve(results);
        
        });
       
    })
}
module.exports=query;

