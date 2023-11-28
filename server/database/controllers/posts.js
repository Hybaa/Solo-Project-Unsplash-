const { posts } = require("../models/index");

const getAllPosts =(req, res) => {
    posts.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  }

  const addPost =(req, res)=>{ 
    console.log(req.body);
    posts.add(req.body,function (err, results) {
        if (err) res.status(500).send(err);
        else res.json("Done");
      });

}
  module.exports = { getAllPosts , addPost }