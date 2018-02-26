//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var s040FModel = require('../../models/Subjects/S040F.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = s040FModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;