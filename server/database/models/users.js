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
//a function that retrieves one user record based on the provided id.
const getOne = function(id,callback) { 
  const sql = "SELECT * FROM `users` WHERE id_users =?" 
  conn.query(sql,[id], function (error, results) {
    callback(error, results);
  });
}

//SELECT COL NAME AND ID POST  WHERE ID USER = 1 

module.exports = { getAll , add , getOne}

// {
//   "userName" : "Haithem",
//     "userEmail" : "haithem@gmail.com",
//     "collectionName":"Favory"
// }