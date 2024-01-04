// the controller does the crud for the db

const User = require("../models/model");



// read all
module.exports.findAll = (req,res)=>{
    User.find()
    .then(jokes => {
        res.json(jokes)
    })
    .catch(err => res.json(err));
}
// READ ONE by ID
module.exports.findOnee= (req,res)=>{
    User.findOne({_id: req.params.id})
    .then((oneDoc) => {
        res.json(oneDoc);
    })
    .catch((err) => res.json(err));
}

// CREAT 
module.exports.createNew=(req,res)=>{
    User.create(req.body)
    .then((newDoc)=> {
        res.json(newDoc);
    })
    .catch(err => res.json(err));
}
// update

module.exports.editDoc=(req,res)=>{
    User.findOneAndUpdate({_id:req.params.id},req,body,{
        new: true ,
        runValidators:true,
    })
    .then(updatedDoc =>{
        res.json(updatedDoc)   
    })
    .catch(err => res.json(err));
}

//? DELETE
module.exports.deleteOnee = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => res.json(err));
};