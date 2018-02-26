//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var s013IModel = require('../../models/Subjects/S013I.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = s013IModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;