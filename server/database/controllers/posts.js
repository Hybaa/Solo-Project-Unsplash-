const { posts } = require("../models/index");

const getAllPosts = (req, res) => {
  posts.getAll(function (err, results) {
    if (err) res.status(500).send(err);
    else res.json(results);
  });
}

const addPost = (req, res) => {
  console.log(req.body);
  posts.add(req.body, function (err, results) {
    if (err) res.status(500).send(err);
    else res.json("Done");
  });
}
const updatePost = (req, res) => {
  const id = req.params.id_post;
  const postData = req.body;
console.log(id);
console.log(postData);
  posts.update(id, postData, function (err, results) {
    if (err) res.status(500).send(err);
    else res.json("Post updated successfully");
  });
}
const deletePost = (req,res)=>{
  var id = req.params.id_post
  console.log(id);
  posts.delet(id,function(err,result){
    if(err) res.status(300).send(err)
    else res.json("delete");
  });
}
const searchByHashtag = (req, res) => {
  const hashtag = req.query.hashtag; 
  console.log(hashtag);

  posts.searchByHashtag(hashtag, (err, results) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send("Error while searching by hashtag");
      return
    }   
    res.json(results);
  });   
};







module.exports = { getAllPosts, addPost , updatePost, deletePost, searchByHashtag}