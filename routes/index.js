var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    var response = []
    users.forEach(element => {
      response.push(element.dataValues)
    });
    res.json(response)
  });
});

router.get('/:id/tasks', function(req, res, next) {
  var id = req.params.id
  models.Task.findAll({
    where: { UserId:id }
  }).then(function(tasks) {
    var response = []
    tasks.forEach(element => {
      response.push(element.dataValues)
    });
    res.json(response)
  });
});

router.put('/:id/tasks', function(req, res, next) {
  var id = req.params.id
  models.Task.create({
    title: req.body.title,
    completed: false,
    UserId: id
  }).then(function(created) { // note the argument
      console.log(created)
      if(created.dataValues.id){
        res.send("Success with id "+ created.dataValues.id)
      }else{
        res.send("Not created: ")
      }
      
  });
   
});

module.exports = router;