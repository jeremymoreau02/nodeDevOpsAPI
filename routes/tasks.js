var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Task.findAll({
    include: [ models.User ]
  }).then(function(tasks) {
    var response = []
    tasks.forEach(element => {
      response.push(element.dataValues)
    });
    res.json(response)
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  models.Task.findOne({
    where: {id: id},
    include: [ models.User ]
  }).then(function(tasks) {
    var response = tasks.dataValues
    res.json(response)
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id
  models.Task.destroy({
    where: {id: id}
  }).then(function(tasks) {
    res.send("deleted")
  });
});

router.post('/:id', function(req, res, next) {
  var id = req.params.id
  var complete = false
  console.log(req.body)
  if(req.body.completed === 'true'){
    complete = true
  }
  models.Task.update({
    title: req.body.title,
    completed: complete,
    UserId: req.body.UserId
  },{
    where: {id: id}
  }).then(function(tasks) {
    res.send("deleted")
  });
});

module.exports = router;
