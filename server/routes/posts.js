const express = require('express');
const router = express.Router();

// Require controller modules.
const { getAllPosts, addPost } = require('../database/controllers/posts');

/// POSTS ROUTES ///

//GET request to fetch all posts. NOTE This must come before route for id.
router.get('/getAll', getAllPosts);
// GET request for one post.
router.post('/add', addPost);


module.exports = router;



// {
//     "postName" : "Urban Jungle",
//       "img" : "urban.jpg",
//       "descreption":"Exploring the vibrant streets of the city",
//       "hashtags":"#city #urban #exploration",
//       "map":"Downtown Metropolis, XYZ",
//       "likes":"120",
//       "users_id":"9"
//   }