const conn = require("../mysql.js")
 
 //a function which fetches all the users.
const getAll = (callback)=>{
    const sql = 'SELECT * FROM `users`'
    conn.query(sql, function (error, results) {
        callback(error, results);
      });
}

const add= (obj,callback)=>{
  const sql = "INSERT INTO `unsplash`.`users` ( `userName`,`userEmail`,`collectionName`) VALUES (?,?,?);"
  conn.query(sql,[obj.userName,obj.userEmail,obj.collectionName],function (error, results) {
    callback(error, results)
  })
  }
module.exports = { getAll , add }

// {
//   "userName" : "Haithem",
//     "userEmail" : "haithem@gmail.com",
//     "collectionName":"Favory"
// }