//dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose template
var s020FModel = require('../../models/Subjects/S020F.js');

router.get('/', function(req, res, next) {
	var founData = null;
	
	var data = s020FModel.find({}, {_id: 0}).lean().exec(function (err, docs) {
  	foundData = docs;	
	
   	res.send(foundData);
  });	
});

module.exports = router;
