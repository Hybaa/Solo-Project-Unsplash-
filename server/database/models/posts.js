const conn = require("../mysql.js")

const getAll = (callback)=>{
    const sql = 'SELECT * FROM `posts`'
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  }

 const add = (obj,callback)=> {
    console.log(obj, "add");
    const sql = "INSERT INTO `unsplash`.`posts` (`postName`,`img`,`descreption`,`hashtags`,`map`,`likes`,`users_id`) VALUES (?,?,?,?,?,?,?);"
    conn.query(sql,[obj.postName,obj.img,obj.descreption,obj.hashtags,obj.map,obj.likes,obj.users_id], function (error, results) {
      callback(error, results);
    });
 }

  module.exports = { getAll , add }


//   "INSERT INTO `unsplash`.`users` ( `userName`,`userEmail`,`collectionName`) VALUES (?,?,?);"