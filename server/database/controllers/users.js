// Controller related to users ressource.
// Complete the request handlers with models interaction after importing them from the database folder
const { users } = require("../models/index")

const getAllUsers = (req,res)=>{
    users.getAll((err,results)=>{
if (err) {
    console.error(err);
    res.status(500).send(err)
}else{
    res.json(results);
}
    })
}
const addUser =(req, res)=>{
    console.log(req.body)
    users.add(req.body, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json("Done");
    });

}
const getOneUser = (req, res) =>{
    var id = req.params.iduser
  users.getOne(id,function(err,result){
    if(err) res.status(501).send(err)
    else res.json(result);
  })
}
module.exports = { getAllUsers , addUser , getOneUser}
