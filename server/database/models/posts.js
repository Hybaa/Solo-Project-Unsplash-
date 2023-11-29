const conn = require("../mysql.js")

const getAll = (callback)=>{
    const sql = 'SELECT * FROM `posts` INNER JOIN users ON posts.users_id=id_users'
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  }

 const add = (obj,callback)=> {
    console.log(obj, "add");
    const sql = "INSERT INTO `unsplash`.`posts` (`postName`,`img`,`descreption`,`hashtags`,`map`,`users_id`) VALUES (?,?,?,?,?,?);"
    conn.query(sql,[obj.postName,obj.img,obj.descreption,obj.hashtags,obj.map,obj.users_id], function (error, results) {
      callback(error, results);
    });
 }


 const update = (id_post,obj, callback) => {
  console.log(obj, "update");
  const sql = "UPDATE `posts` SET `postName` = ?, `img` = ?, `descreption` = ?, `hashtags` = ?, `map` = ?, `likes` = ?, `users_id` = ? WHERE id_post=?";
  conn.query(sql,[[obj.postName],[obj.img],[obj.descreption],[obj.hashtags],[obj.map],[obj.likes],[obj.users_id],[id_post]], function (error, results) {
    console
      callback(error, results);
  })
 }


 const delet = (id_post,callback) => {
  const sql="DELETE from posts where id_post=?;"
 conn.query(sql,[id_post],function(error,result){
  callback(error,result);
 })
} 
 const searchByHashtag = (hashtag, callback) => {
  const sql = "SELECT * FROM posts WHERE hashtags LIKE ?"; // SQL query template

  // Use '%' + hashtag + '%' to search for the hashtag anywhere within the hashtags column
  conn.query(sql, [`%${hashtag}%`], (error, results) => {
    callback(error, results);
  });
}


  module.exports = { getAll , add , update, delet,searchByHashtag }


//   "INSERT INTO `unsplash`.`users` ( `userName`,`userEmail`,`collectionName`) VALUES (?,?,?);"